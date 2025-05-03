import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  http = inject(HttpClient);
  private apiURL = "http://localhost:3000/api/items"

  constructor() { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiURL);
  }

  getItem(id: number | null): Observable<Item> {
    return this.http.get<Item>(this.apiURL + "/" + id + ".json");
  }

}
