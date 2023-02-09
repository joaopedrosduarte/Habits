import { PlusCircle, X } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { getUserLocalStorage } from "../context/auth/util";
import * as Dialog from '@radix-ui/react-dialog';
import { api } from "../lib/axios";
import { message } from "antd";
import { TaskTypeTwo } from './TaskTypeTwo';

export type TaskProps = {
    id: number,
    name: string,
    description: string,
    createdAt: Date,
    update: Date,
    endAt?: Date,
    status: 0 | 1 | 2,
}

export function TaskList() {
    const [newTaskName, setNewTaskName] = useState("");
    const [newTaskDescription, setNewTaskDescription] = useState("");
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

    async function handleCreateNewTask(event: FormEvent){
        event.preventDefault();

        try {
            await api.post("/home/newtask", {
                name: newTaskName,
                description: newTaskDescription,
                userToken: actualUser.token,
            })
        } catch (error){
            message.error("Error with creation of the task, try again !");
        }

        //bliblioteca gostosinha
        message.success('New task has been created ! Wait 2 seconds');
        setTimeout(() => {
            window.location.reload();
		}, 1000);
    }

    return (
        <div className="relative flex bg-white w-[640px] h-auto flex-col p-3 rounded-tr-none rounded-tl-none rounded-lg">
            <Dialog.Root>
                <form className="flex gap-4 pb-4 border-b border-dashed border-gray-300 flex-col" onSubmit={handleCreateNewTask}>
                    <Dialog.Trigger asChild>
                        <button className="border-2 flex-1 rounded-md bg-primary border-primary text-white flex justify-center items-center p-4 font-bold gap-2">
                            <span>New task</span>
                            <PlusCircle weight={"bold"} />
                        </button>
                    </Dialog.Trigger>  
                </form>
                <Dialog.Portal>
                    <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
                    <Dialog.Content className='ab p-10 bg-white rounded-2xl w-full max-w-md top-1/4 left-1/2 -translate-x-1/2'>
                        <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200 transition-colors'>
                            <X size={24} arial-label="Fechar"/>
                        </Dialog.Close>
                        <Dialog.Title className='pb-2 text-3xl text-zinc-700 font-light leading-tight'>
                            Criar Task
                        </Dialog.Title>
                        <div className="flex flex-col gap-2">
                            <span className="text-zinc-500 font-light text-lg mt-2">Nome</span>
                            <input type="text" value={newTaskName} onChange={event => setNewTaskName(event.target.value)} className="rounded-md border-zinc-300 border h-10 p-4 text-zinc-500 focus:border-primary"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-zinc-500 font-light text-lg mt-2">Descrição</span>
                            <input type="text" value={newTaskDescription} onChange={event => setNewTaskDescription(event.target.value)} className="rounded-md border-zinc-300 border h-10 p-4 text-zinc-500 focus:border-primary"/>
                        </div>
                        <div className="flex justify-center" >
                            <button className="mt-8 bg-primary text-white rounded-3xl font-light text-2xl px-8 py-1" onClick={handleCreateNewTask}>
                                Cadastrar-se
                            </button>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>  
            </Dialog.Root>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] px-[10px] gap-[8px] pt-4">
                {
                    userTasks.length !== 0 ? userTasks.map(task => {
                        if (task.status !== 2){
                            console.log("teste",task.status)
                            return (
                                <TaskTypeTwo key={task.id}  description={task.description} createdAt={task.createdAt} name={task.name} status={task.status} taskId={task.id} onHandleDeleteTask={handleDeleteTask}/>
                            )
                        } else {
                            //console.log("fudeu",task.status);
                        }
                    }) : null
                }
            </div>
        </div>
    )
}
