import { CanActivateFn } from '@angular/router';
import { STORAGE_ADMIN_ROLE } from '../configs/storage-keys';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem(STORAGE_ADMIN_ROLE);
  if (!role) return;
  return JSON.parse(role) || false;
};
