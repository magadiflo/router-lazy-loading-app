import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { PathRest } from '../static/path-rest';

@Injectable()
export class AnimesInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Clona la solicitud y reemplaza los encabezados originales con
    // encabezados clonados, actualizados con la autorización.
    let requestClone = request;
    console.log("Request a la siguiente url: " + request.url);
    if (!this._isLogin(request.url)) {
      requestClone = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('access_token')}`),
      });
    }
    return next.handle(requestClone)
      .pipe(
        catchError(error => this._errorHandler(error))
      );
  }

  // Para que no envie el access_token cuando la url es del login
  private _isLogin(url: string): boolean {
    return url.search(PathRest.GET_LOGIN) != -1;
  }

  private _errorHandler(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.log('[Interceptor] Error de cliente');
      } else {
        console.log('[Interceptor] Error de servidor');
      }
    } else {
      console.log('[Interceptor] Otro tipo de error (no cliente ni servidor)');
    }
    return throwError(() => error);
  }

}
