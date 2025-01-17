import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../interfaces/player';
import {PlayerStats} from '../interfaces/playerstats';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  http = inject(HttpClient);
  private apiPlayersURL = "https://omeda.city/players"

  constructor() { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiPlayersURL + ".json");
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(this.apiPlayersURL + "/" + id + ".json");
  }

  getPlayerStats(id: number): Observable<PlayerStats> {
    return this.http.get<PlayerStats>(this.apiPlayersURL + "/" + id + "/statistics.json");
  }
}
