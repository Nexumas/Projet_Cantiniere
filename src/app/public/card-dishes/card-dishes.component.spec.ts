import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDishesComponent } from './card-dishes.component';

describe('CardDishesComponent', () => {
  let component: CardDishesComponent;
  let fixture: ComponentFixture<CardDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
