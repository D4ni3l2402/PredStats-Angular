import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  http = inject(HttpClient);
  private apiURL = "https://omeda.city/items.json"

  constructor() { }

  getItems(): Observable<any> {
    return this.http.get(this.apiURL);
  }

}
