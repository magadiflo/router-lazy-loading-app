import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { IRequestLogin } from '../../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = 'joh3n';
  password: string = '123456';

  constructor(
    private router: Router,
    private _loginService: AuthService) { }

  login(): void {
    const user: IRequestLogin = { username: this.username, password: this.password };
    this._loginService.login(user)
      .subscribe({
        next: ({ accessToken }) => console.log(accessToken),
        error: err => console.log('(error)[LoginComponent]:', err.message),
      });
    // this.router.navigate(['/dashboard']);
  }

}
