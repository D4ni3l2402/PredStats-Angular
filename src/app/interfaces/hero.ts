export interface Hero {
    id: number;
    name: string;
    display_name: string | null;
    image: string;
    classes: string[];
    roles: string[];
    price?: number;
    total_price?: number | null;
    abilities: {};
    stats: {};
    level: number;
}
