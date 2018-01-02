import { Film } from './film.model';
import { People } from './people.model';

export class Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: string;
    crew: number;
    passengers: number;
    cargo_capacity: number;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;

    constructor(
        init?: Partial<Starship>
    ) {
        Object.assign(this, init);
    }
}