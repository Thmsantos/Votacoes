import type { Context } from "elysia";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";
import type { CreateUserInput, userBody } from "./types";
import type CreateUserService from "../../../core/services/User/CreateUserService/CreateUserService";

export default class CreateUserController implements Controller<
    CreateUserInput,
    HttpResponse
> {
    private createUserService: CreateUserService;

    constructor(createUserService: CreateUserService) {
        this.createUserService = createUserService;
    }

    public async handle(
        ctx: Context<{ body: userBody }>,
    ): Promise<HttpResponse> {
        try {
            const user = await this.createUserService.execute(ctx.body);

            ctx.set.status = 201;
            return {
                status: Number(ctx.status),
                body: { message: "created", user },
            };
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "USER_EXISTS") {
                    ctx.set.status = 409;
                    return {
                        status: Number(ctx.status),
                        body: { message: "User already exists" },
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
