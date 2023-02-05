import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Cadastro(){
    const [name, setName] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleCreateNewUser(event: FormEvent) {
        event.preventDefault();

        console.log(name, login, password)
    };

    return (
        <form className="w-full flex flex-col mt-6" onSubmit={handleCreateNewUser}>
            <div className="flex flex-col gap-2">
                <span className="text-zinc-600 font-light text-lg mt-2">Nome</span>
                <input type="text" value={name} onChange={event => setName(event.target.value)} className="rounded-md border-zinc-300 border h-10 p-4 text-zinc-500 focus:border-primary"/>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-zinc-600 font-light text-lg mt-2">Login</span>
                <input type="text" value={login} onChange={event => setLogin(event.target.value)} className="rounded-md border-zinc-300 border h-10 p-4 text-zinc-500 focus:border-primary"/>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-zinc-600 font-light text-lg mt-2">Password</span>
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