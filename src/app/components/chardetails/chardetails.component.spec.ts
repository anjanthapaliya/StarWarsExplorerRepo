import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChardetailsComponent } from './chardetails.component';

describe('ChardetailsComponent', () => {
  let component: ChardetailsComponent;
  let fixture: ComponentFixture<ChardetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChardetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
