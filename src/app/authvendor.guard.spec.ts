import { TestBed, async, inject } from '@angular/core/testing';

import { AuthvendorGuard } from './authvendor.guard';

describe('AuthvendorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthvendorGuard]
    });
  });

  it('should ...', inject([AuthvendorGuard], (guard: AuthvendorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
