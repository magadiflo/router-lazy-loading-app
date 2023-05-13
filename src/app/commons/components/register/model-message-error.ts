export interface IAttribute {
    formControlName: string;
    validators: IValidator[];
}

export interface IValidator {
    name: string;
    message: string;
}

export const MODEL_REGISTER_ERRORS: IAttribute[] = [
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