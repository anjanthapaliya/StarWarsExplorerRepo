import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmdetailsComponent } from './filmdetails.component';

describe('FilmdetailsComponent', () => {
  let component: FilmdetailsComponent;
  let fixture: ComponentFixture<FilmdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
