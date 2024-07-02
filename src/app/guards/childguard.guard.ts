import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const childguardGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenicated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
