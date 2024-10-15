import { AuthService, ROLE } from '@ambulance-monorepo/services';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

export const authorizationGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const rolesAllowed: ROLE[] = route.data['roles'] as ROLE[];
  const rolesUser: ROLE[] | null = authService.getRoles();

  if (!rolesUser) {
    return false;
  }

  return rolesAllowed.some((role) => rolesUser.includes(role));
};
