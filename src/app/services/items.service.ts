import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  http = inject(HttpClient);
  private apiURL = "https://omeda.city/items"

  constructor() { }

  getItems(): Observable<any> {
    return this.http.get(this.apiURL + ".json");
  }

  getItem(id: number): Observable<any> {
    return this.http.get(this.apiURL + "/" + id + ".json");
  }

}
