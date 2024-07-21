import { CanActivateFn } from '@angular/router';

export const authUserGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('User');
  if (!role) return;
  return JSON.parse(role) || false;
};
