import { TestBed } from '@angular/core/testing';

import { LogonDeactivateGuard } from './logon-deactivate.guard';

describe('LogonDeactivateGuard', () => {
  let guard: LogonDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogonDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
