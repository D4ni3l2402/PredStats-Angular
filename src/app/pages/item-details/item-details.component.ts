import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ItemsService} from '../../services/items.service';
import {Effect, Item} from '../../interfaces/item';

@Component({
  selector: 'app-item-details',
  imports: [RouterLink],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {

  itemId: number | null = 0;
  item: Item | null = null;
  allItems: Item[] = [];
  // itemStats: string[] = [];
  statsEntries: [string, any][] = [];
  effects: Effect[] | null = [];
  requirements: string[] = [];
  buildPaths: string[] = [];
  apiURL: string = "https://omeda.city/";

    constructor(private route: ActivatedRoute, private itemsService: ItemsService) {
      this.route.params.subscribe(params => {
        this.itemId = params['id'];
        this.itemsService.getItem(this.itemId).subscribe((data: Item) => {
          this.item = data;
          console.log(data.effects);
          this.statsEntries = Object.entries(data.stats);
          this.effects = data.effects;
          this.requirements = data.requirements;
          this.buildPaths = data.build_paths;


          setTimeout(() => {
            console.log(this.effects)
           } , 1000);
        });
      });

      this.fetchAllItems();
    }

    fetchAllItems() {
      this.itemsService.getItems().subscribe((data: Item[]) => {
        data.sort((a, b) => a.name.localeCompare(b.name));
        this.allItems = data;
        console.log(data)

      });
    }

    findItem(name: string): Item | undefined {
      return this.allItems.find(item => item.name === name);
    }

    removeHTMLTags(text: any): string {
      return text.replace(/<[^>]*>/g, '');
    }

    formatMessage(message: string | null | undefined): string {
      if (!message) return '';

      return message.split('.').map(sentence => sentence.trim()).filter(Boolean).join('.<br>');

    }
}
