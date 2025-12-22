import type { Context } from "elysia";
import type LoginService from "../../../core/services/Auth/login/LoginService";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";
import type { loginBody, LoginInput } from "./types";

export default class LoginController implements Controller<
    LoginInput,
    HttpResponse
> {
    private loginService: LoginService;

    constructor(loginService: LoginService) {
        this.loginService = loginService;
    }

    public async handle(
        ctx: Context<{ body: loginBody }>,
    ): Promise<HttpResponse> {
        try {
            const { username, password } = ctx.body;
            const logged = await this.loginService.execute(username, password);

            ctx.set.status = 200;
            return {
                status: Number(ctx.status),
                body: { message: "login successful", logged },
            };
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "invalid credentials") {
                    ctx.set.status = 401;
                    return {
                        status: Number(ctx.status),
                        body: { message: error.message },
                    };
                }
            }

            ctx.set.status = 500;
            return {
                status: Number(ctx.status),
                body: { message: "Internal error" },
            };
        }
    }
}
