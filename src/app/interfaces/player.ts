export interface Player {
  id: number;
  display_name: string;
  created_at: string;
  skill: number;
  last_played_at: string;
  mmr: number;
  vp_total: number;
  rank: number;
  nationality: string;
  most_played_hero: number;
  most_played_role: string;
  blocked: boolean;
  rank_image: string;
  region: string;
  leaderboard_rank: number;
  rank_title: string | undefined;
  is_active: boolean;
  team: string;
  hero_id: number;
  role: string;
  level: number;
  performance_title: string | undefined;
  performance_score: number | undefined;
  kills: number | undefined;
  deaths: number | undefined;
  assists: number   | undefined;
}

