import { TestBed } from '@angular/core/testing';

import { MealforweekService } from './mealforweek.service';

describe('MealforweekService', () => {
  let service: MealforweekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealforweekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
