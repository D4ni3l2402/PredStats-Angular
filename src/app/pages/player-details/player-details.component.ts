import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PlayersService} from '../../services/players.service';
import {Player} from '../../interfaces/player';
import {PlayerStats} from '../../interfaces/playerstats';
import {MatchesComponent} from '../../components/matches/matches.component';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [RouterLink, MatchesComponent],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent implements OnInit {

  playerID: number = 0;
  player: Player | null = null;
  playerStats: PlayerStats | null = null;
  loading: boolean = true;
  apiURL: string = "https://omeda.city/";

  kills: number = 0;
  deaths: number = 0;
  assists: number = 0;
  winrate: string = "0.00";

  constructor(private route: ActivatedRoute, private playerService: PlayersService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playerID = params['id'];
      this.loading = true;
      this.playerService.getPlayer(this.playerID).subscribe((data: Player) => {
        this.player = data;
      });
      this.playerService.getPlayerStats(this.playerID).subscribe((data: PlayerStats) => {
        this.playerStats = data;
        this.kills = data.avg_kda[0];
        this.deaths = data.avg_kda[1];
        this.assists = data.avg_kda[2];
        this.winrate = (data.winrate * 100).toFixed(2);
        console.log(this.kills)
        this.loading = false;
      }, () => {
        this.loading = false;
      });
    });
  }

  getRankColor(rankTitle: string) {
    return this.playerService.getRankColor(rankTitle);
  }

}
