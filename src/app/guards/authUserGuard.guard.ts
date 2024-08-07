import { CanActivateFn } from '@angular/router';
import { STORAGE_USER_ROLE } from '../configs/storage-keys';

export const authUserGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem(STORAGE_USER_ROLE);
  if (!role) return;
  return JSON.parse(role) || false;
};
