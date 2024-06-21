import { CanActivateFn } from '@angular/router';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('Admin');
  if (!role) return;
  return JSON.parse(role) || false;
};
