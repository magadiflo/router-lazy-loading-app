import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
        catchError(error => this._errorHandler(error))
      );
  }

  private _errorHandler(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.log('Error de cliente');
      } else {
        console.log('Error de servidor');
      }
    } else {
      console.log('Otro tipo de error (no cliente ni servidor)');
    }
    return throwError(() => error);
  }

}
