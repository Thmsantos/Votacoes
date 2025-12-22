import Elysia from "elysia";
import { elysiaAdapter } from "../adapters/adapter";
import { loginController } from "../../controllers/Auth";
import { loginSchema } from "../../controllers/Auth/types";

export const authRoutes = new Elysia({ prefix: "/auth" }).post(
    "/login",
    elysiaAdapter(loginController, (ctx) => ({
        body: ctx.body,
    })),
    { body: loginSchema },
);
