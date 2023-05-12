import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  miFormulario: FormGroup = this._fb.group({
    name: [null],
    email: [null],
    password: [null],
    'repeat-password': [null]
  });

  constructor(private _fb: FormBuilder) { }

  register(): void {
    console.log(this.miFormulario.value);
  }

}
