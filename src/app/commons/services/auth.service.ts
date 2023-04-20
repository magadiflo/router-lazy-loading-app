import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import { IRequestLogin, IResponseLogin } from '../models/auth';
import { PathRest } from '../static/path-rest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  login(credentials: IRequestLogin): Observable<IResponseLogin> {
    return this._httpClient.post<IResponseLogin>(PathRest.GET_LOGIN, credentials)
      .pipe(
        catchError(error => throwError(() => new Error(error.message)))
      )
  }

}
