import {Hero} from './hero';

export interface PlayerStats {
  matches_played: number;
  hours_played: number;
  avg_performance_score: number;
  avg_kda: number[];
  avg_kdar: number;
  favorite_hero: Hero;
}
