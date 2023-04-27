import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { IRequestLogin } from '../../models/auth';

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
    private _loginService: AuthService) { }

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
          localStorage.setItem('access_token', accessToken);
          this.router.navigate(['/dashboard']);
        },
        error: err => console.log('(error)[LoginComponent]:', err.message),
      });
  }

}
