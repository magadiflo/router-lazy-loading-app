import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AnimesInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    return next.handle(request)
      .pipe(
        catchError(error => this._errorHandler(error))
      );
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
