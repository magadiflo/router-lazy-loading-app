import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

export const animeChildGuard = (): boolean | UrlTree => {
  console.log('AnimeChildGuard -> canActivateChild()');

  const router = inject(Router);
  const isLoggedIn = true;

  if (isLoggedIn) {
    return isLoggedIn;
  }

  return router.parseUrl('/login');
}