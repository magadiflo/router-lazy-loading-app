/**
 * *** 'CanActivate' is deprecated ***
 * Deprecated: Class-based Route guards are deprecated in favor of functional guards. 
 * An injectable class can be used as a functional guard using the 
 * inject function: canActivate: [() => inject(myGuard).canActivate()].
 * ?[información sobre interfaz deprecada]: https://angular.io/api/router/CanActivate
 * ?[Ejemplo implementando guard funcional] https://angular.io/guide/router-tutorial-toh#canactivate-requiring-authentication
 */

import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { JwtAuthService } from '../services/jwt-auth.service';

export const animeGuard = (): boolean | UrlTree => {
  console.log('AnimeGuard -> canActivate()');

  const jwtAuthService = inject(JwtAuthService);
  const router = inject(Router);
  const isLoggedIn = true;

  if (jwtAuthService.isLoggedIn()) {
    return isLoggedIn;
  }

  return router.parseUrl('/login');
}