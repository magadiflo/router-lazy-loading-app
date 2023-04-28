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

export const animeGuard = (): boolean | UrlTree => {
  console.log('AnimeGuard -> canActivate()');

  const router = inject(Router);
  const isLoggedIn = true;

  if (isLoggedIn) {
    return isLoggedIn;
  }

  return router.parseUrl('/login');
}