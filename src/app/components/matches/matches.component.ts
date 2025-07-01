import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../interfaces/player';
import {PlayersService} from '../../services/players.service';
import {Matches} from '../../interfaces/matches';
import {Hero} from '../../interfaces/hero';
import {HeroesService} from '../../services/heroes.service';
import {ItemsService} from '../../services/items.service';
import {Item} from '../../interfaces/item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-matches',
  standalone: true,
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  apiURL: string = "https://omeda.city/";

  matches: Matches[] = [];
  heroes: Hero[] = [];
  items: Item[] = [];
  inventory: number[] = [];
  roles = [
    {
      name: 'jungle',
      imageURL: 'https://omeda.city/assets/roles/jungle-c43c837ece4b73b2a4101e913b9b8e59fb7a393d2b23f112b779d889358a4f13.png'
    },
    {
      name: 'carry',
      imageURL: 'https://omeda.city/assets/roles/carry-1f4f562c785fb03cc39970abadd7e9ee58bf37d5ca687968a49903adc9a3e973.png'
    },
    {
      name: 'support',
      imageURL: 'https://omeda.city/assets/roles/support-050b192a48d98a1aa2368deeb7e55d394d58fa3cdb49c9884d72e016fd56ddec.png'
    },
    {
      name: 'midlane',
      imageURL: 'https://omeda.city/assets/roles/midlane-498362e1fe9ebc584b06fd2ec90113d88787beb1e642eef52539da0e8e60919f.png'
    },
    {
      name: 'offlane',
      imageURL: 'https://omeda.city/assets/roles/offlane-5ce91516be38e86be484433dff6b2e7f34d7394a8c014686d70547759ffcf99a.png'
    }
  ];

  @Input() player: Player | null = null;

  constructor(private playerService: PlayersService, private heroService: HeroesService, private itemService: ItemsService, private router : Router) {
    // This constructor is intentionally empty

  }

  ngOnInit() {
    this.itemService.getItems().subscribe((data: Item[]) => {
      this.items = data;
    });

    if (this.player) {
      this.playerService.getPlayerMatches(this.player.id).subscribe((data: { matches: Matches[] }) => {
        this.matches = data.matches;
        console.log(this.matches);
        data.matches.forEach((match: Matches) => {
          console.log(this.hasWon(match));
        });
      });

      this.heroService.getHeroes().subscribe((data: Hero[]) => {
        this.heroes = data;
      });


    }


  }

  hasWon(match: Matches): boolean {
    for (const p of match.players) {
      if (this.player?.id === p.id) {
        if (p.team === match.winning_team) {
          console.log("Ja")
          return true;
        }
      }
    }

    return false;
  }

  getItem(itemId: number): Item  {
    const item = this.items.find(item => item.game_id === itemId);
    if(!item) {
      throw new Error('Item not found');
    }
    return item;
  }


  getHeroMatch(match: Matches): Hero {
    const heroId = match.players.find(p => p.id === this.player?.id)?.hero_id;
    const hero = this.heroes.find(h => h.id === heroId);
    if (!hero) {
      throw new Error('Hero not found');
    }
    return hero;
  }

  getPlayerMatch(match: Matches): Player  {
    const p = match.players.find(p => p.id === this.player?.id);
    this.inventory = p?.inventory_data || [];
    this.inventory = [this.inventory[7], this.inventory[6], this.inventory[0], this.inventory[1], this.inventory[2], this.inventory[8], this.inventory[3], this.inventory[4], this.inventory[5]];
    if(!p) {
      throw new Error('Player not found in match');
    }
    return p;
  }

  getRoleImage(match: Matches): string | undefined {
    const playerRole = match.players.find(p => p.id === this.player?.id)?.role;
    return this.roles.find(role => role.name === playerRole)?.imageURL;
  }

  goToItem(id: string) {
    this.router.navigate(['/items', id]);
  }

}
