import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWeekDishesComponent } from './admin-week-dishes.component';

describe('AdminWeekDishesComponent', () => {
  let component: AdminWeekDishesComponent;
  let fixture: ComponentFixture<AdminWeekDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWeekDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWeekDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
