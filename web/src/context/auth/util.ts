import { api } from '../../lib/axios';
import { IUser } from './types';

export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage(){
    const json = localStorage.getItem("u");

    if (!json){
        return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
}

export async function LoginRequest(login: string, password:string){
    try {
        const request = await api.post(`/login`, {
            login: login,
            password: password
        })

        return request.data;
    } catch (error) {
        return null;
    }
}