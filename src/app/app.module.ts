import { SwapiService } from './services/swapi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmdetailsComponent } from './components/filmdetails/filmdetails.component';
import { FilmdetailsinputComponent } from './components/filmdetailsinput/filmdetailsinput/filmdetailsinput.component';
import { routing } from 'app/app.router';
import { ChardetailsComponent } from './components/chardetails/chardetails.component';
import { CommaSeparatedToUnorderedListPipe } from 'app/commaSeparatedToUnorderedList';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmdetailsComponent,
    FilmdetailsinputComponent,
    ChardetailsComponent,
    CommaSeparatedToUnorderedListPipe
  ],
  imports:   [ BrowserModule, HttpClientModule, routing, BrowserAnimationsModule ],
  providers: [ SwapiService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
