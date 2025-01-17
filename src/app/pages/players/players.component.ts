import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
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

  constructor(private playerService: PlayersService) {
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe((data: Player[]) => {
      this.players = data;
    });
  }

}
