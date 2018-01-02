import { Film } from './film.model';
import { People } from './people.model';

export class Planet {
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: number;
    population: number;
    residents: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;

    constructor(
        init?: Partial<Planet>
    ) {
        Object.assign(this, init);
    }
}