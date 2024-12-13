import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  imports: [RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  apiURL = "https://omeda.city/";
  heroes: any[] = [];
  categories: string[] = [];
  heroesStats: any[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {
    this.heroesService.getHeroes().subscribe((data: any[]) => {
      data.sort((a, b) => a.display_name.localeCompare(b.display_name));
      this.heroes = data;
      console.log(data);

      // data.forEach((hero) => {
      //   if (!this.categories.includes(hero.hero_class) && hero.hero_class !== null) {

      //     this.categories.push(hero.hero_class);
      //   }
      // });
    });

    this.heroesService.getHeroStats().subscribe(response => {
      this.heroesStats = response.hero_statistics;
      console.log(this.heroesStats);
    })
  }

  round(value: number, decimals: number = 0): number {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  }

  goToHero(id: string) {
    this.router.navigate(['/heroes', id]);
  }

}
