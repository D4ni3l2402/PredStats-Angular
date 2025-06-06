import {Player} from './player';

export interface Matches {
  id: number;
  start_time: Date;
  end_time: Date;
  game_duration: number;
  game_region: string;
  winning_team: string;
  game_mode: string;
  players: Player[];
  inventory_data: number[];
  level: number;

}
