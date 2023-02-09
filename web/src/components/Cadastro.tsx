import { FormEvent, useState } from "react";
import { api } from "../lib/axios";
import { message } from 'antd';

export function Cadastro(){
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isRegisterValid, setIsRegisterValid] = useState(true);

    async function handleCreateNewUser(event: FormEvent) {
        event.preventDefault();
        
        if(!name || !login || !password){
            return;
        }
        
        try {
            await api.post('cadastro', {
                name,
                login,
                password
            });
        } catch (error) {
            setIsRegisterValid(false);
            message.error('Login or password already exists !')
            return;
        }
        
        setIsRegisterValid(true);
        setName('');
        setLogin('');
        setPassword('');
        message.success('Account has been created ! Wait 2 seconds')
        setTimeout(() => {
            window.location.reload();
		}, 2200);
    };

    return (
        <form className="w-full flex flex-col mt-6" onSubmit={handleCreateNewUser}>
            <div className="flex flex-col gap-2">
                <span className="text-zin500 font-light text-lg mt-2">Nome</span>
                <input type="text" value={name} onChange={event => setName(event.target.value)} className="rounded-md border-zinc-300 border h-10 p-4 text-zinc-500 focus:border-primary"/>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-zinc-500 font-light text-lg mt-2">Login</span>
                <input type="text" value={login} onChange={event => setLogin(event.target.value)} className="rounded-md border-zinc-300 border h-10 p-4 text-zinc-500 focus:border-primary"/>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-zinc-500 font-light text-lg mt-2">Password</span>
                <input type="text" value={password} onChange={event => setPassword(event.target.value)} className="rounded-md border-zinc-300 border h-10 p-4 text-zinc-500 focus:border-primary"/>
            </div>
            <div className="flex justify-center" >
                <button className="mt-8 bg-primary text-white rounded-3xl font-light text-2xl px-8 py-1">
                    Cadastrar-se
                </button>
            </div>
        </form>
    )
}