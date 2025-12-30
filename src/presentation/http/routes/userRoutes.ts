import Elysia from "elysia";
import { createUserController } from "../../controllers/User";
import { createUserSchema } from "../../../domain/entities/user/types";
import { elysiaAdapter } from "../adapters/adapter";

export const userRoutes = new Elysia({ prefix: "/user" }).post(
    "/",
    elysiaAdapter(createUserController, (ctx) => ({
        body: ctx.body,
    })),
    { body: createUserSchema },
);
