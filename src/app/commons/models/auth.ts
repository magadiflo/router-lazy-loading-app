export interface IRequestLogin {
    username: string;
    password: string;
}

export interface IResponseLogin {
    accessToken: string;
}

export interface IJwt {
    exp: number;
    role: string[];
    username: string;
}