import { message } from "antd";
import { Check, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

interface taskProps {
    name: string,
    onHandleDeleteTask: (id: number) => void,
    taskId: number,
    status: 0 | 1 | 2,
}

export function TaskTypeOne({ name, taskId, onHandleDeleteTask, status }: taskProps){
    const [localStatus,setLocalStatus] = useState(status);

    async function handleChangeTaskStatus(){
        try { 
            await api.patch("/home/toggle/task", {
                id: (taskId),
                status: 2,
            })

            setLocalStatus(2);
        } catch (error) {
            message.error("erro")
            console.log(error)
        }
    }

    return (
        <div className="flex flex-1 justify-between mt-4 mx-0 border rounded-md p-3">
            <div className="flex flex-1 gap-3 justify-between items-center">
                {
                    <span className={localStatus === 2 ? "decoration-gray-200 line-through text-gray-200 transition-all":"decoration-transparent text-black"}>
                        {name}{localStatus == 2 ? " :: CANCELADA" : null}
                    </span>
                }
                <button className={localStatus === 2 ? " font-semibold border-2 border-gray-200 rounded-md p-2 decoration-gray-200 line-through text-gray-200 transition-all":"decoration-transparent text-black font-semibold border-2 border-black rounded-md p-2"} onClick={() => handleChangeTaskStatus()}>
                    <span>Cancelar ?</span>
                </button>
            </div>
        </div>
    )
}