import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Player} from '../../interfaces/player';
import {PlayersService} from '../../services/players.service';

@Component({
  selector: 'app-players',
  imports: [RouterLink],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];
  apiURL = "https://omeda.city/";

  route = inject(ActivatedRoute);

  constructor(private playerService: PlayersService, private router: Router) {
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe((data: Player[]) => {
      this.players = data;
    });
  }

  goToPlayer(id: number) {
    this.router.navigate(['/players', id]);
  }

}
