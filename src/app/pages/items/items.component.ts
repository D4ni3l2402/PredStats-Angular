import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../services/items.service';


@Component({
  selector: 'app-items',
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  items: any[] = [];

  constructor(private itemsService: ItemsService) {
    this.itemsService.getItems().subscribe((data: any[]) => {
      this.items = data;
    });
  }

}
