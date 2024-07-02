import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { contactformGuard } from './contactform.guard';

describe('contactformGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => contactformGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
