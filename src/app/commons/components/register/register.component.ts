import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MODEL_REGISTER_ERRORS, customSimbolos } from './model-message-error';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  miFormulario: FormGroup = this._fb.group({
    name: [null, [Validators.required, customSimbolos()]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    'repeat-password': [null, [Validators.required, Validators.minLength(6)]]
  });

  // Accesor, son los famosos getters y setters
  //
  // AbstractControl, es lo que internamente usa Angular para hacer referencia hacia el control.
  // En otras palabras, podemos entender el AbstractControl como la manera de hacer el binding
  // entre lo que hay dentro del FormsReactiveModule y el html a la variable de referencia.
  get nameAbstract(): AbstractControl | null {
    return this.miFormulario.get('name');
  }

  constructor(private _fb: FormBuilder) { }

  register(): void {
    console.log(this.miFormulario.value);
  }

  // Forma 01
  getError1(controlName: string): string {
    const control = this.miFormulario.controls[controlName];

    if (control && control.touched && control.invalid) {
      if (control.hasError('required')) {
        return `El ${controlName} es requerido.`;
      }
      if (control.hasError('email')) {
        return `El valor para el ${controlName} no tiene un formato válido.`;
      }
      if (control.hasError('minlength')) {
        return `El ${controlName} requiere como mínimo ${control.getError('minlength').requiredLength} caracteres`;
      }
    }
    return '';
  }

  // Forma 02
  getError(controlName: string): string {
    const control = this.miFormulario.controls[controlName];
    if (control && control.touched && control.invalid) {
      const attributeError = MODEL_REGISTER_ERRORS.find(control => control.formControlName === controlName);
      const validator = attributeError?.validators.find(val => control.errors?.[val.name]);
      return validator!.message;
    }
    return '';
  }

}
