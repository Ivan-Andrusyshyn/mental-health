import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.getIsAuthAdmin();
};
