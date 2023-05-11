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
  dataLoginForm: IRequestLogin = { username: '', password: '' };

  constructor(
    private router: Router,
    private _loginService: AuthService,
    private _jwtAuthService: JwtAuthService) { }

  login(): void {
    // const user: IRequestLogin = {
    //   username: this.username,
    //   password: this.password
    // };
    // this._loginService.login(user)
    //   .subscribe({
    //     next: ({ accessToken }) => {
    //       this._jwtAuthService.login(accessToken);
    //       this.router.navigate(['/dashboard']);
    //     },
    //     error: err => console.log('(error)[LoginComponent]:', err.message),
    //   });
    console.log(this.dataLoginForm);
  }

}
