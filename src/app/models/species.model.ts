import { Film } from './film.model';
import { People } from './people.model';

export class Species {
    name: string;
    classification: string;
    designation: string;
    average_height: number;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: number;
    homeworld: string;
    language: string;
    people: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;

    constructor(
        init?: Partial<Species>
    ) {
        Object.assign(this, init);
    }
}