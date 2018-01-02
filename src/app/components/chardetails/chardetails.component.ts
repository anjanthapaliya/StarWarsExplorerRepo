import { Component, OnInit, Input ,Output, OnChanges, EventEmitter} from '@angular/core';
import { People } from 'app/models/people.model';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Film } from 'app/models/film.model';
import { SwapiService } from 'app/services/swapi.service';

@Component({
  selector: 'app-chardetails',
  templateUrl: './chardetails.component.html',
  styleUrls: ['./chardetails.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]

})
export class ChardetailsComponent implements OnInit {
  @Input() char : People;
  @Input() charFilms: string[];  //all the other films a character has been in 
  @Input() visible: boolean;
  @Input() closable: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  charName : string; 
  charHeight: string;
  charEyeColor: string;
  parsedFilms: string[];


  constructor(public swFilmService : SwapiService) { }

  ngOnInit() {}

  close(){
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
