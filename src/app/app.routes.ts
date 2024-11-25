import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ItemsComponent} from './pages/items/items.component';
import {HeroesComponent} from './pages/heroes/heroes.component';
import {PlayersComponent} from './pages/players/players.component';

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
    path: "heroes",
    component: HeroesComponent
  },
  {
    path: "players",
    component: PlayersComponent
  }
];

