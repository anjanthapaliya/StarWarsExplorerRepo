import { People } from './people.model';
import { Planet } from './planet.model';
import { Species } from './species.model';
import { Starship } from './starship.model';
import { Vehicle } from './vehicle.model';

export class Film {
        title: string;
        episode_id: number;
        opening_crawl: string;
        director: string;
        producer: string;
        release_date: string;
        characters: string[];
        planets: string[];
        starships: string[];
        vehicles: string[];
        species: string[];
        created: Date;
        edited: Date;
        url: string;

        constructor(init?: Partial<Film>) {
                Object.assign(this, init);
        }
}