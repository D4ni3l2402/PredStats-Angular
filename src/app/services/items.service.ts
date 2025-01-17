import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  http = inject(HttpClient);
  private apiURL = "https://omeda.city/items"

  constructor() { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiURL + ".json");
  }

  getItem(id: number | null): Observable<Item> {
    return this.http.get<Item>(this.apiURL + "/" + id + ".json");
  }

}
