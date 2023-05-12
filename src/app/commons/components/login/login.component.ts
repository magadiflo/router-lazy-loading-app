import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { IRequestLogin } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('myFormLogin') myFormLogin: NgForm | undefined;
  dataLoginForm: IRequestLogin = { username: 'john', password: '123456' };

  constructor(
    private router: Router,
    private _loginService: AuthService,
    private _jwtAuthService: JwtAuthService) { }

  login(): void {
    console.log(this.dataLoginForm);
    this._loginService.login(this.dataLoginForm)
      .subscribe({
        next: ({ accessToken }) => {
          this._jwtAuthService.login(accessToken);
          this.router.navigate(['/dashboard']);
        },
        error: err => console.log('(error)[LoginComponent]:', err.message),
      });
  }

}
