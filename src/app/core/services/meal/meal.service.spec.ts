import { TestBed } from '@angular/core/testing';

import { MealinweekService } from './mealinweek.service';

describe('MealService', () => {
  let service: MealinweekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealinweekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
