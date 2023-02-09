import * as Dialog from '@radix-ui/react-dialog';
import dayjs from 'dayjs';
import { Check, Trash, X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { message } from 'antd';

interface taskProps {
    name: string,
    description: string,
    createdAt: Date,
    onHandleDeleteTask: (id: number) => void,
    taskId: number,
    status: 0 | 1,
}

export function TaskTypeTwo({ name, description, createdAt ,onHandleDeleteTask, taskId, status }: taskProps){
    // tem que mudar o false para a entrada do tipo da query da task.
    // tem que mudar o estado no banco de dados se a task foi completa.
    const [ isTaskChecked, setIsTaskChecked ] = useState(false);

    const dayAndMonth = dayjs(createdAt).format('DD/MM');

    useEffect(() => {
        status === 1 ? setIsTaskChecked(false) : setIsTaskChecked(true)
    },[])

    async function handleChangeTaskStatus(){
        isTaskChecked ? setIsTaskChecked(false) : setIsTaskChecked(true)
        const newStatusValue = isTaskChecked ? 0 : 1
        
        try { 
            await api.patch("/home/toggle/task", {
                id: (taskId),
                status: newStatusValue,
            })
        } catch (error) {
            message.error("erro")
            console.log(error)
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <div className={`flex flex-col rounded-2xl mb-2 w-[12rem] ${isTaskChecked ? "shadow-sm" : "shadow-md"} transition-all`}>
                    <div className="w-[12rem] h-32 overflow-hidden flex rounded-t-2xl">
                        <img className="object-cover min-w-full min-h-full" src={"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"} />
                    </div>
                    <div className={`bg-white rounded-b-3xl w-[12rem] h-auto flex px-3 pb-4 pt-3 justify-between items-center text-lg font-light gap-4 ${isTaskChecked ? "text-zinc-400 line-through" : null} transition-all`}>
                        <h1 className='overflow-hidden text-ellipsis'>{name}</h1>
                        <label className="flex flex-1 justify-end items-center">
                            <input type="checkbox" onClick={() => handleChangeTaskStatus()} className="opacity-0 w-0 h-0" />
                            {
                                isTaskChecked ? <div className="rounded-xl top-0 left-0 right-0 bottom-0 flex bg-primary h-5 w-5 border-primary transition-all justify-center items-center"><Check color="#fff" size={12} weight="bold"/></div> : <div className="rounded-xl top-0 left-0 p-1 right-0 bottom-0 flex bg-white border-2 border-primary h-5 w-5 transition-all " />
                            }
                        </label>
                    </div>
                </div>
            </Dialog.Trigger>
            <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
                <Dialog.Portal>  
                    <Dialog.Content className='relative bg-white rounded-2xl w-full max-w-md top-1/4 left-1/2 -translate-x-1/2'>
                        <div className='flex justify-end'>
                            <div className='flex absolute justify-end m-4'>
                                <div className="flex justify-center items-center bg-white rounded-2xl w-8 h-8" >
                                    <button className="flex border-none text-black justify-center items-center border w-6 h-6" onClick={() => onHandleDeleteTask(taskId)} >
                                        <Trash size={24} weight="regular" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="h-44 w-full inset-0 flex overflow-hidden rounded-t-2xl">
                            <img className="object-cover min-w-full min-h-full" src={"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"} />
                        </div>
                        <div className='flex relative justify-between px-5 py-2'>
                            <div className='flex gap-3 flex-col'>
                                <Dialog.Title className='w-[320px] break-all flex text-3xl text-zinc-700 font-light leading-tight'>
                                    {name}
                                </Dialog.Title>
                                <span className='w-[320px] pb-2 break-all text-xl flex text-zinc-500'>
                                    {description}
                                </span>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex my-2 flex-col justify-start gap-3'>
                                    <div className=''>
                                        <span className='mb-4 text-2xl text-zinc-500 font-light leading-tight'>
                                            {dayAndMonth}
                                        </span>
                                    </div>
                                    <label className='w-10 h-10 flex items-center justify-center' >
                                    <input type="checkbox" className='opacity-0 w-0 h-0' onClick={() => handleChangeTaskStatus()}/>
                                    {
                                        isTaskChecked ? <div className="rounded-3xl top-0 left-0 right-0 bottom-0 flex bg-primary h-8 w-8 border-primary transition-all justify-center items-center"><Check color="#fff" size={24} weight="bold"/></div> : <div className="rounded-3xl top-0 left-0 p-1 right-0 bottom-0 flex bg-white border-2 border-primary h-8 w-8 transition-all " />
                                    }
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                    </Dialog.Content>
                </Dialog.Portal>  
        </Dialog.Root>
    )
}