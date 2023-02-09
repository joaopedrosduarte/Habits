export interface IUser {
    token?: string,
    login?: string, 
}

export interface IContext extends IUser {
    authenticate: (login: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvaider {
    children: JSX.Element;
}