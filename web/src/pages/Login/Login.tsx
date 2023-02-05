import { Background } from "../../components/Background/index" ;
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "phosphor-react"
import { Cadastro } from "../../components/Cadastro";


export function Login(){
    return (


        <div className="w-full h-full bg-primary flex align-middle justify-center">
            <Background />
            <form className="w-80 h-auto bg-white absolute top-1/4 flex flex-col rounded-xl p-8 content-center gap-3">
                <h1 className="flex justify-center text-3xl text-zinc-700 font-light pb-4 border-b border-zinc-200">Sign in</h1>
                <div className="flex flex-col gap-2">
                    <span className="text-zinc-600 font-light text-lg mt-2">Login</span>
                    <input type="text" placeholder="" className="rounded-md border-zinc-300 border h-10 p-4 text-zinc-500 focus:border-primary"/>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-zinc-600 font-light text-lg">Password</span>
                    <input type="text" placeholder="" className="rounded-md border-zinc-300 border h-10 p-4 text-zinc-500 focus:border-primary"/>
                </div>
                <div className="flex justify-center" >
                    <button className="mt-4 bg-primary text-white rounded-3xl font-light text-2xl px-8 py-1">
                        Entrar
                    </button>
                </div>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button className="mt-2"><span className="text-xs font-normal text-zinc-400 underline">Cadastre-se</span></button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
                        <Dialog.Content className='absolute p-10 bg-white rounded-2xl w-full max-w-md top-1/4 left-1/2 -translate-x-1/2'>
                            <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-zinc-900 focus:ring-offset-background'>
                                <X size={24} arial-label="Fechar"/>
                            </Dialog.Close>
                            <Dialog.Title className='text-3xl text-zinc-700 font-light leading-tight'>
                                Criar conta
                            </Dialog.Title>
                            <Cadastro />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </form>
        </div>
    )
}