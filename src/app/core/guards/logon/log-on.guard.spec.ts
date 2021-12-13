import { TestBed } from '@angular/core/testing';

import { LogOnGuard } from './log-on.guard';

describe('LogOnGuard', () => {
  let guard: LogOnGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogOnGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
