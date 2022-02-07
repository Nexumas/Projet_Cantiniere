import { TestBed } from '@angular/core/testing';

import { DayDishesService } from './day-dishes.service';

describe('DayDishesService', () => {
  let service: DayDishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayDishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
