import { TestBed } from '@angular/core/testing';

import { CardDishesService } from './card-dishes.service';

describe('CardDishesService', () => {
  let service: CardDishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
