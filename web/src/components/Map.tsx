import { X } from "phosphor-react";

export function Map() {
    return (
        <div className="relative flex bg-white w-[638px] h-[400px] flex-col p-5 rounded-tr-none rounded-tl-none rounded-lg gap-3  justify-center items-center">
            <div className="flex flex-col justify-center items-center text-zinc-600 gap-4">
                <X size={80}/>
                <span className="text-xl text-zinc-500">
                    Essa aba está em manutenção, em breve estara pronta !!
                </span>
            </div>
        </div>
    )
}