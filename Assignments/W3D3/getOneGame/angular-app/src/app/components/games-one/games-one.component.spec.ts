import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesOneComponent } from './games-one.component';

describe('GamesOneComponent', () => {
  let component: GamesOneComponent;
  let fixture: ComponentFixture<GamesOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
