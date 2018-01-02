import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'app/models/film.model';

@Component({
  selector: 'app-filmdetailsinput',
  templateUrl: './filmdetailsinput.component.html',
  styleUrls: ['./filmdetailsinput.component.css']
})
export class FilmdetailsinputComponent implements OnInit {
  @Input() film: Film;

  constructor() { }

  ngOnInit() {
  }

}
