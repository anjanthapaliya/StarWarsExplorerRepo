import { Film } from './film.model';
import { Planet } from './planet.model';
import { Species } from './species.model';
import { Starship } from './starship.model';
import { Vehicle } from './vehicle.model';

export class People {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;

    constructor(
        init?: Partial<People>
    ){
        Object.assign(this, init);
    }
}