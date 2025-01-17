import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {ItemsService} from '../../services/items.service';
import {RouterLink, Router, ActivatedRoute} from '@angular/router';
import {Item} from '../../interfaces/item';
import {query} from '@angular/animations';


@Component({
  selector: 'app-items',
  imports: [RouterLink],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {

  apiURL = "https://omeda.city/";
  items: Item[] = [];
  filteredItems: Item[] = [];
  categories: string[] = [];

  route = inject(ActivatedRoute);

  constructor(private itemsService: ItemsService, private router: Router, private element: ElementRef) {

  }

  ngOnInit() {
    this.itemsService.getItems().subscribe((data: Item[]) => {
      data.sort((a, b) => a.name.localeCompare(b.name));
      this.items = data;
      this.filteredItems = data;


      // Kategorien extrahieren
      data.forEach((item) => {
        if (!this.categories.includes(item.hero_class) && item.hero_class !== null) {
          this.categories.push(item.hero_class);
        }
      });

      // Jetzt die Query-Parameter auswerten
      this.route.queryParams.subscribe(params => {
        const category = params['category']; // Kategorie aus der URL

        if (category) {
          this.filteredItems = this.items.filter(
            (item) => item.hero_class === category
          );
          setTimeout(() => {
            let cat = this.element.nativeElement.querySelectorAll('.category');
            cat.forEach((c: Element) => {
              c.classList.remove('active');
              if(c.textContent === category) {
                c.classList.add('active');
              }
            });
          }, 25);
        } else {
          this.filteredItems = this.items; // Zeige alle Items, wenn keine Kategorie angegeben ist
        }

        console.log(this.filteredItems); // Debugging
      });
    });
  }



  goToItem(id: string) {
    this.router.navigate(['/items', id]);
  }

  changeCategory(category: string) {
    this.router.navigate([], {
      queryParams: { category },
      queryParamsHandling: 'merge'
    });

    this.itemsService.getItems().subscribe((data: Item[]) => {
      data.sort((a, b) => a.name.localeCompare(b.name));
      this.filteredItems = data.filter((item) => item.hero_class === category);

    });

    let cat = this.element.nativeElement.querySelectorAll('.category');
    cat.forEach((c: Element) => {
      c.classList.remove('active');
      if(c.textContent === category) {
        c.classList.add('active');
      }
    });
  }

}
