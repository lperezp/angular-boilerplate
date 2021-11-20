import { TestBed, inject } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let adminGuard: AdminGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard],
    });
  });

  beforeEach(() => {
    adminGuard = TestBed.inject(AdminGuard);
  });

  it('should ...', () => {
    expect(adminGuard).toBeTruthy();
  });

  it('should return boolean', () => {
    expect(adminGuard.canActivate()).toBe(true);
  });
});
