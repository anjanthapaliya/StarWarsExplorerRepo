import { IFilm } from './../interfaces/film';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';   
import { Film } from 'app/models/film.model';
import { People } from 'app/models/people.model';

@Injectable()
export class SwapiService {
  baseUrl: string = "https://swapi.co/api/";  
  constructor(private _httpClient: HttpClient) {}
  
  fetchFilmsData(): Observable<Film[]>{
      return this._httpClient.get(this.baseUrl + "films")
          .map((res: any) => {
            var films = res["results"];
                return films.map((film:any) => {
                        return new Film(film);
                    }
                );    
            }
        );
   }

   fetchFilmData(url: string): Observable<Film>{
        return this._httpClient.get(url)
        .map((res) =>{
                return new Film(res);
            }
        );
   }

   fetchCharactersData(url: string ): Observable<People>{
        return this._httpClient.get(url)
        .map((res) => {            
                return new People(res);
            }
        );
   }
}


 

