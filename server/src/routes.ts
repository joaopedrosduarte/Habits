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

        await prisma.user.create({
            data: {
                name,
                login,
                password,
            }
        })
    })
    // Rota de login na qual vai retornar o valor da conta atual.
    app.get('/login/:login', async (request) => {
        const loginParams = z.object({
            login: z.string(),
        });

        const { login } = loginParams.parse(request.params);
        console.log(login)

        const isLoginAvaiable = await prisma.user.findMany({
            where: {
                login: login
            }
        })

        console.log(isLoginAvaiable);
        return (
            isLoginAvaiable
        )
    })
    // Rota de criar task

    // Rota de toogle da tasks

    // Rota de deletar uma tasks

    // Rota de retorno das tasks de um usuario
}