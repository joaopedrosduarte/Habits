import { message } from "antd";
import { useEffect, useState } from "react";
import { getUserLocalStorage } from "../context/auth/util"
import { api } from '../lib/axios';
import { TaskProps } from "./TaskList";
import { TaskTypeOne } from "./TaskTypeOne";

export function User() {
    const [userTasks, setUserTasks] = useState<TaskProps[]>([]);
    const actualUser = getUserLocalStorage();

    async function getUserTasks() {
        await api.get(`/home/${actualUser.token}/tasks`).then((res) => {
            setUserTasks(res.data);
        });
    }

    useEffect(() => {
        getUserTasks();
    }, []);

    async function handleDeleteTask(taskId : number){
        const newId = taskId.toString();

        try {
            await api.delete(`/home/deletetask/${newId}`)
        } catch (error) {
            message.error("Error with try to delete task")
        }

        message.success('The task has been deleted ! Wait 2 seconds');
        setTimeout(() => {
            window.location.reload();
		}, 1000);
    }

    return (
        <div className="relative flex bg-white w-[638px] h-auto flex-col p-5 rounded-tr-none rounded-tl-none">
            <div className="flex flex-col gap-3 border-dashed border-b border-zinc-400 pb-4">
                <h1 className='w-[320px] break-all flex text-3xl text-zinc-700 font-light leading-tight'>
                    Usuario logado: { actualUser.login }
                </h1>
                <span className='w-[320px] pb-2 break-all text-xl flex text-zinc-500'>
                    Numero de tasks: { userTasks.length }
                </span>
            </div>
            {
                userTasks.length !== 0 ? userTasks.map(task => {
                    {
                        return (
                            <TaskTypeOne key={task.id} name={task.name} status={task.status} taskId={task.id} onHandleDeleteTask={handleDeleteTask}/>
                        )
                    }
                }) : null
            }
        </div>
    )
}