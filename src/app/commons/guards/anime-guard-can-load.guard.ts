import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

export const animeGuardCanLoadGuard = (): boolean | UrlTree => {
  console.log('AnimeGuardCanLoadGuard -> canLoad()');

  const router = inject(Router);
  const isLoggedIn = true;

  if (isLoggedIn) {
    return isLoggedIn;
  }

  return router.parseUrl('/login');
}