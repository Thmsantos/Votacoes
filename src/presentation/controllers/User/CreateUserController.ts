import type { Context } from "elysia";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";
import type { CreateUserInput, userBody } from "../../../domain/entities/user/types";
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

            return {
                status: 201,
                body: { message: "created", user },
            };
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "USER_EXISTS") {
                    return {
                        status: 409,
                        body: { message: "User already exists", error },
                    };
                }
            }

            return {
                status: 500,
                body: { message: "Internal error", error },
            };
        }
    }
}
