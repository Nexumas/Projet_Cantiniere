import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDishesComponent } from './calendar-dishes.component';

describe('CalendarDishesComponent', () => {
  let component: CalendarDishesComponent;
  let fixture: ComponentFixture<CalendarDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
