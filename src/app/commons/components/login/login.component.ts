import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { IRequestLogin } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { JwtAuthService } from '../../services/jwt-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('username') username!: ElementRef<HTMLInputElement>;
  @ViewChild('password') password!: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router,
    private _loginService: AuthService,
    private _jwtAuthService: JwtAuthService) { }

  ngAfterViewInit(): void {
    this.username.nativeElement.value = 'john';
    this.password.nativeElement.value = '123456';
  }

  login(): void {
    const user: IRequestLogin = {
      username: this.username.nativeElement.value,
      password: this.password.nativeElement.value
    };
    this._loginService.login(user)
      .subscribe({
        next: ({ accessToken }) => {          
          this._jwtAuthService.login(accessToken);
          this.router.navigate(['/dashboard']);
        },
        error: err => console.log('(error)[LoginComponent]:', err.message),
      });
  }

}
