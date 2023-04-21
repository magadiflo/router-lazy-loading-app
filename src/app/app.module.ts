import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './pages/auth/auth.module';
import { AnimesInterceptor } from './commons/interceptors/animes.interceptor';

/**
 * ¡IMPORTANTE!, el orden en el que están definidos los interceptores sí importa.
 * Esto es, porque de acuerdo al orden en el que se definieron en el arreglo de los providers, serán ejecutados.
 */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AnimesInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
