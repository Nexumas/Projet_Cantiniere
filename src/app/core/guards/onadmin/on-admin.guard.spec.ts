import { TestBed } from '@angular/core/testing';

import { OnAdminGuard } from './on-admin.guard';

describe('OnAdminGuard', () => {
  let guard: OnAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
