import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../interfaces/player';
import {PlayerStats} from '../interfaces/playerstats';
import {Matches} from '../interfaces/matches';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  http = inject(HttpClient);
  private apiPlayersURL = "http://localhost:3000/api/players"

  constructor() { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiPlayersURL);
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(this.apiPlayersURL + "/" + id);
  }

  getPlayerStats(id: number): Observable<PlayerStats> {
    return this.http.get<PlayerStats>(this.apiPlayersURL + "/" + id + "/statistics");
  }

  getPlayerMatches(id: number): Observable<{ matches: Matches[] }> {
    return this.http.get<{ matches: Matches[] }>(this.apiPlayersURL + "/" + id + "/matches");
  }


  getRankColor(rankTitle: string) {
    const lowerCaseRankTitle = rankTitle.toLowerCase();
    let color = '';

    if (lowerCaseRankTitle.includes('bronze')) {
      color = '#cd7f32';
    } else if (lowerCaseRankTitle.includes('silver')) {
      color = '#c0c0c0';
    } else if (lowerCaseRankTitle.includes('gold')) {
      color = '#ffd700';
    } else if (lowerCaseRankTitle.includes('platinum')) {
      color = '#e5e4e2';
    } else if (lowerCaseRankTitle.includes('diamond')) {
      color = '#b9f2ff';
    } else if (lowerCaseRankTitle.includes('paragon')) {
      color = '#b36e6c';
    } else {
      color = '#ffffff';
    }

    return color;
  }
}
