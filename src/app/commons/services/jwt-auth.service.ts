import { Injectable } from '@angular/core';

import jwt_decode from 'jwt-decode';

import { LocalStorageJWT } from '../static/local-storage';
import { IJwt } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  constructor() { }

  login(token: string): void {
    const decode = jwt_decode<IJwt>(token);

    localStorage.setItem(LocalStorageJWT.LS_ACCESS_TOKEN, token);
    localStorage.setItem(LocalStorageJWT.LS_ROLES, JSON.stringify(decode.role));
  }

  isLoggedIn(): boolean {
    const localStorageRole = localStorage.getItem(LocalStorageJWT.LS_ROLES);
    if (!localStorageRole) {
      return false;
    }
    const rolArray = JSON.parse(localStorageRole) as Array<string>;
    
    if (rolArray.length === 0) {
      return false;
    }
    return true;
  }
}
