import { TestBed } from '@angular/core/testing';

import { MealsforweekService } from './mealsforweek.service';

describe('MealsforweekService', () => {
  let service: MealsforweekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsforweekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
