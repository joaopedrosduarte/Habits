import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "./lib/prisma";


export async function appRouts(app: FastifyInstance){
    // Rota de cadastro
    app.post('/cadastro', async (request) => {
        const createUser = z.object({
            name: z.string(),
            login: z.string(),
            password: z.string(),
        });

        const { name, login, password } = createUser.parse(request.body);
        
        try {
            await prisma.user.create({
                data: {
                    name,
                    login,
                    password,
                }
            })
        } catch (error) {
            return alert("Login já existente!");
        }
        
    })
    // Rota de login na qual vai retornar o valor da conta atual.
    app.post('/login', async (request) => {
        const loginBody = z.object({
            login: z.string(),
            password: z.string(),
        })

        const { login, password } = loginBody.parse(request.body);

        try {
            const request = await prisma.user.findMany({
                where: {
                    login,
                    password
                }
            }) 

            console.log(request[0].token);
            
            return {
                token: `${request[0].token}`
            }

        } catch {
            alert("Account not exists!");
            return null;
        }
    })
    // Rota receber as tasks de certo usuario
    app.get("/home/:token/tasks", async (request) => {
        const tokenParams = z.object({
            token: z.string(),
        });

        const { token } = tokenParams.parse(request.params);

        const userTasks = await prisma.task.findMany({
            where: {
                userToken: token
            }
        });

        return userTasks;
    })
    // Rota de criar task
    app.post("/home/newtask", async (request) => {
        const newTaskParams = z.object({
            name: z.string(),
            description: z.string(),
            userToken: z.string(),
        });

        const { name, description, userToken } = newTaskParams.parse(request.body);

        try {
            await prisma.task.create({
                data: {
                    name,
                    description,
                    userToken
                }
            });
        } catch (error) {
            return alert("Erro ao criar nova task !");
        }

    })
    // Rota de deletar a tasks
    app.delete("/home/deletetask/:id", async (request) => {
        const idTaskParams = z.object({
            id: z.string(),
        });

        const { id } = idTaskParams.parse(request.params);
        const newId = parseInt(id);

        try {
            await prisma.task.delete({
                where: {
                    id: newId
                }
            })
        } catch (error) {
            return alert("Erro ao deletar uma task !");
        }

    })
    // Rota de toggle da task
    app.patch("/home/toggle/task", async (request) => {
        const toggleTaskCompletedButton = z.object({
            id: z.number(),
            status: z.number(),
        })

        const { id, status } = toggleTaskCompletedButton.parse(request.body);
        let backupStatus:number;
        console.log(id, status)
        
        if (status === 0){
            backupStatus = 1;
        } else if (status === 2) {
            backupStatus = 2;
        } else {
            backupStatus = 0
        }

        try {
            await prisma.task.update({
                where: {
                    id: id
                }, 
                data: {
                    status: backupStatus
                }
            });

            return backupStatus
        } catch ( error ) {
            console.log( error )
            alert("error");
        }
    })
    // Rota de retorno das tasks de um usuario
}