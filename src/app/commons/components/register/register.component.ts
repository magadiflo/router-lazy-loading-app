import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  miFormulario: FormGroup = this._fb.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    'repeat-password': [null, [Validators.required, Validators.minLength(6)]]
  });

  constructor(private _fb: FormBuilder) { }

  register(): void {
    console.log(this.miFormulario.value);
  }

}
