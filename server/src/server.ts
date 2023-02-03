import { fastify } from "fastify";
import cors from "@fastify/cors";
import { appRouts } from "./routes";

export const app = fastify();

app.register(cors);
app.register(appRouts);

app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP SERVER IS RUNNING")
})