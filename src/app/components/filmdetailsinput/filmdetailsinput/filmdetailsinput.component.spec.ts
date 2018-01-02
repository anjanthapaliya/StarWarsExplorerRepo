import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmdetailsinputComponent } from './filmdetailsinput.component';

describe('FilmdetailsinputComponent', () => {
  let component: FilmdetailsinputComponent;
  let fixture: ComponentFixture<FilmdetailsinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmdetailsinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmdetailsinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
