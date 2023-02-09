import { createContext, useEffect } from 'react';
import { IContext, IAuthProvaider, IUser } from './types';
import { useState } from 'react';
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from './util';

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvaider) {
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const user = getUserLocalStorage();

        if(user){
            setUser(user);
        }
    }, []);

    async function authenticate(login: string, password: string){
        const response = await LoginRequest(login, password);

        const payload = {
            token: response.token,
            login
        };

        setUser(payload);
        setUserLocalStorage(payload);
    }
    
    function logout(){
        setUser(null);
        setUserLocalStorage(null);
    }
    
    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
 