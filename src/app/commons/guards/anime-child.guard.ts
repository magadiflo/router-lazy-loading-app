import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { JwtAuthService } from '../services/jwt-auth.service';

export const animeChildGuard = (): boolean | UrlTree => {
  console.log('AnimeChildGuard -> canActivateChild()');

  const jwtAuthService = inject(JwtAuthService);
  const router = inject(Router);
  const isLoggedIn = true;

  if (jwtAuthService.isLoggedIn()) {
    return isLoggedIn;
  }

  return router.parseUrl('/login');
}