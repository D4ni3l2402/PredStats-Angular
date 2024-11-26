import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../services/items.service';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-items',
  imports: [RouterLink],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  apiURL = "https://omeda.city/";
  items: any[] = [];
  categories: string[] = [];

  constructor(private itemsService: ItemsService) {
    this.itemsService.getItems().subscribe((data: any[]) => {
      data.sort((a, b) => a.name.localeCompare(b.name));
      this.items = data;

      data.forEach((item) => {
        if (!this.categories.includes(item.hero_class) && item.hero_class !== null) {

          this.categories.push(item.hero_class);
        }
      });
    });
  }

}
