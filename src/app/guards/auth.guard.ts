import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenicated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenicated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
}
