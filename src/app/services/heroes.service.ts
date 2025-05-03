import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  http = inject(HttpClient);
  private apiHeroesURL = "http://localhost:3000/api/heroes"
  private apiStatsURL = "http://localhost:3000/api/hero_stats"

  constructor() { }

  getHeroes(): Observable<any> {
    return this.http.get(this.apiHeroesURL );
  }

  getHero(id: number): Observable<any> {
    return this.http.get(this.apiHeroesURL + "/" + id );
  }

  getHeroStats(): Observable<any> {
    return this.http.get(this.apiStatsURL);
  }
}
