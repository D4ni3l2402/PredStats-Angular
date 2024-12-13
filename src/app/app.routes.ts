import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ItemsComponent} from './pages/items/items.component';
import {HeroesComponent} from './pages/heroes/heroes.component';
import {HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import {PlayersComponent} from './pages/players/players.component';
import {ItemDetailsComponent} from './pages/item-details/item-details.component';

export const routes: Routes = [
  { path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "items",
    component: ItemsComponent
  },
  {
    path: "items/:id",
    component: ItemDetailsComponent
  },
  {
    path: "heroes",
    component: HeroesComponent
  },
  {
    path: "heroes/:id",
    component: HeroDetailsComponent
  },
  {
    path: "players",
    component: PlayersComponent
  }
];

