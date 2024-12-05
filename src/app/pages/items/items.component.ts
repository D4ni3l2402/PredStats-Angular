import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../services/items.service';
import {RouterLink, Router} from '@angular/router';
import {Item} from '../../interfaces/item';


@Component({
  selector: 'app-items',
  imports: [RouterLink],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  apiURL = "https://omeda.city/";
  items: Item[] = [];
  categories: string[] = [];

  constructor(private itemsService: ItemsService, private router: Router) {
    this.itemsService.getItems().subscribe((data: Item[]) => {
      data.sort((a, b) => a.name.localeCompare(b.name));
      this.items = data;
      console.log(data)

      data.forEach((item) => {
        if (!this.categories.includes(item.hero_class) && item.hero_class !== null) {

          this.categories.push(item.hero_class);
        }
      });
    });
  }

  goToItem(id: string) {
    this.router.navigate(['/items', id]);
  }

}
