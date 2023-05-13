import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export interface IAttribute {
    formControlName: string;
    validators: IValidator[];
}

export interface IValidator {
    name: string;
    message: string;
}

export function customSimbolos(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value as string || '';
        if (!value.includes('*')) {
            return { asterisco: true };
        }
        if (!value.includes('$')) {
            return { dolar: true };
        }
        return null;
    }
}

export const MODEL_REGISTER_ERRORS: IAttribute[] = [
    {
        formControlName: 'name',
        validators: [
            { name: 'required', message: 'El nombre es requerido!' },
            { name: 'asterisco', message: 'El nombre debe tener un *' },
            { name: 'dolar', message: 'El nombre debe tener un $' },
        ]
    },
    {
        formControlName: 'email',
        validators: [
            { name: 'required', message: 'El email es requerido!' },
            { name: 'email', message: 'El email ingresado no tiene un formato correcto!' },
        ]
    },
    {
        formControlName: 'password',
        validators: [
            { name: 'required', message: 'La contraseña es requerido!' },
            { name: 'minlength', message: 'Debe ingresar como mínimo 6 caracteres!' },
        ]
    },
];