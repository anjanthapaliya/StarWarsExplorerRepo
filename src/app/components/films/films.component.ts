import { Film } from './../../models/film.model';
import { Results } from './../../models/result.model';
import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit { 
  films : Film[] = [];
  swfilm: Film;
  constructor(public swFilmService : SwapiService) {}

  ngOnInit() {
    this.getAllFilmsFromService(); 
    //console.log(this.getFilmDetailsFromService());
   }

  getAllFilmsFromService(){
    this.swFilmService.fetchFilmsData().subscribe((result) => {
         this.films = result;
      });
      /*console.log(Object.keys(result),
                  result["results"],
                  result["results"][1].title );   
      console.log(this.films);
    });*/
  }

  getFilmDetailsFromService(){
    this.swFilmService.fetchFilmsData().subscribe((res) => {
      return res["results"].map(function(item){
        return item.title + " Test";
      });
    });
  }

  getFilmCharacters(episodeID: number){
    this.swFilmService.fetchFilmsData().subscribe((result) => {
      var film =  result.filter((x) => x.episode_id === episodeID);
      // DO SOMETHING WITH film[0].characters;
    });
  }

  setFilm(someFilm : Film){
    this.swfilm = someFilm;
   }

}
