import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-hero-details',
  imports: [RouterLink],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent {

  apiURL = "https://omeda.city/";
  heroId: number = 0;
  hero: Hero | null = null;
  allHeroes: Hero[] = [];
  abilities: any[] = [];

  constructor(private route: ActivatedRoute, private heroesService: HeroesService) {
    this.route.params.subscribe(params => {
      this.heroId = params['id'];
      this.heroesService.getHero(this.heroId).subscribe((data: Hero) => {
        this.hero = data;
        this.abilities = Object.entries(data.abilities);
        console.log(this.abilities)
      });
    });

  }

  removeHTMLTags(text: any): string {
    return text.replace(/<[^>]*>/g, '');
  }

  // fetchAllHeroes() {
  //   this.heroesService.getHeroes().subscribe((data: Hero[]) => {
  //     data.sort((a, b) => a.name.localeCompare(b.name));
  //     this.allHeroes = data;
  //     console.log(data)

  //   });
  // }
  
}