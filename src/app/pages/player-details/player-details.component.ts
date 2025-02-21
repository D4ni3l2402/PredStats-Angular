import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PlayersService} from '../../services/players.service';
import {Player} from '../../interfaces/player';

@Component({
  selector: 'app-player-details',
  imports: [RouterLink],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent implements OnInit {

  playerID: number = 0;
  player: Player | null = null;
  loading: boolean = true;
  apiURL: string = "https://omeda.city/";

  constructor(private route: ActivatedRoute, private playerService: PlayersService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playerID = params['id'];
      this.loading = true;
      this.playerService.getPlayer(this.playerID).subscribe((data: Player) => {
        this.player = data;
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
