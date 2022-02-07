import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCalendarDishesComponent } from './admin-calendar-dishes.component';

describe('AdminCalendarDishesComponent', () => {
  let component: AdminCalendarDishesComponent;
  let fixture: ComponentFixture<AdminCalendarDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCalendarDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCalendarDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
