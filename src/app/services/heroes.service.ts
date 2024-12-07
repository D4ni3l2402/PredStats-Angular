import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  http = inject(HttpClient);
  private apiHeroesURL = "https://omeda.city/heroes"
  private apiStatsURL = "https://omeda.city/dashboard/hero_statistics.json/"

  constructor() { }

  getHeroes(): Observable<any> {
    return this.http.get(this.apiHeroesURL + ".json");
  }

  getHero(id: number): Observable<any> {
    return this.http.get(this.apiHeroesURL + "/" + id + ".json");
  }

  getHeroStats(): Observable<any> {
    return this.http.get(this.apiStatsURL);
  }
}
