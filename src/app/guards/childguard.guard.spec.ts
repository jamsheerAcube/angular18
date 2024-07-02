import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { childguardGuard } from './childguard.guard';

describe('childguardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => childguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
