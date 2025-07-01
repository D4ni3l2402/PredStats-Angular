export interface Item {
  id: number;
  game_id: number;
  name: string;
  display_name: string;
  image: string;
  price?: number;
  total_price?: number | null;
  slot_type: string;
  hero_class: string;
  stats: {};
  effects: Effect[];
  requirements: [];
  build_paths: [];
}

// export interface Stats {
//   attack_damage: number;
//   physical_power: number;
//   attack_speed: number;
// }

export interface Effect {
  name: string;
  active: boolean;
  condition: string | null;
  cooldown: string | null;
  menu_description: string;
}
