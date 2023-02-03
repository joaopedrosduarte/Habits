import { PrismaClient } from "@prisma/client"

//Para facilitar a exportação e diminuir a repetição alem de mostrar todas as querys feitas
export const prisma = new PrismaClient({
    log: ['query'],
})