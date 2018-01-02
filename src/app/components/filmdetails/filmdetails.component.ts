import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'app/services/swapi.service';
import {ActivatedRoute} from "@angular/router"; 
import { People } from 'app/models/people.model';

@Component({
  selector: 'app-filmdetails',
  templateUrl: './filmdetails.component.html',
  styleUrls: ['./filmdetails.component.css']
})

export class FilmdetailsComponent implements OnInit {
  characters: People[];
  character: People;
  charFilms: string[];
  director: string;
  producer: string;
  releaseDate: string;
  openingCrawl: string;
  showDialog = false;

  constructor(public swFilmService : SwapiService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.getFilmDetails(params['id']));
  } 
  
  ngOnInit() {
    // this.getFilmCharacters(4); 
  }

  getFilmDetails(episodeID: string){
    this.swFilmService.fetchFilmsData().subscribe((result) => {
      var film =  result.filter((x) => x.episode_id === +episodeID);
      this.openingCrawl = film[0].opening_crawl;
      this.director = film[0].director;
      this.producer = film[0].producer;
      this.releaseDate = film[0].release_date;0
    });
    this.getFilmCharacters(episodeID);
  }

  getFilmCharacters(episodeID: string){
    this.swFilmService.fetchFilmsData().subscribe((result) => {
      var film =  result.filter((x) => x.episode_id === +episodeID);
      this.parseCharacters(film[0].characters);
    });
  }
  
  

  //WHY so slow rendering of the characters list? Performance enhancement
  parseCharacters (characters: string[]) {   
    var chars: People[] = new Array();
    
    for(var i = 0;i<characters.length;i++) { 
      this.swFilmService.fetchCharactersData(characters[i]).subscribe((response) =>{
        chars.push(response);
      });
    }
    this.characters = chars;
  }

  setCharacter(someChar : People){
    this.character = someChar;
  }

  toggleUpdateDialog(c: People){
    this.character = c;
    this.charFilms = this.parseFilmsByCharacter();
    console.log(this.character);
    this.showDialog = !this.showDialog; //click toggles the boolean
  }

  parseFilmsByCharacter(){
    var tempFilms: string[] = new Array();
    for(var i = 0;i<this.character.films.length;i++) { 
      this.swFilmService.fetchFilmData(this.character.films[i]).subscribe((response) =>{
        tempFilms.push(response.title);
        console.log(response.title);
      });
    }
    return tempFilms;
  }

  
}
