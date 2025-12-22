import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import { candidateRoutes } from "./src/presentation/http/routes/candidateRoutes";
import { voteRoutes } from "./src/presentation/http/routes/voteRoutes";
import { userRoutes } from "./src/presentation/http/routes/userRoutes";

new Elysia()
    .use(swagger())
    .use(candidateRoutes)
    .use(voteRoutes)
    .use(userRoutes)
    .listen(3200);

console.log("Server running at http://127.0.0.1:3200");
