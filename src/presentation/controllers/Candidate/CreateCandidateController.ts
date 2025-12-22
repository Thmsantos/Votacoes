import type { Context } from "elysia";
import type { CandidateBody } from "../../../core/value_objects/types/types";
import type CreateCandidateService from "../../../core/services/Candidate/CreateCandidate/CreateCandidateService";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";
import type { CreateCandidateInput } from "./types";

export default class CreateCandidateController implements Controller<
    CreateCandidateInput,
    HttpResponse
> {
    private createCandidateService;

    constructor(createCandidateService: CreateCandidateService) {
        this.createCandidateService = createCandidateService;
    }

    public async handle(
        ctx: Context<{ body: CandidateBody }>,
    ): Promise<HttpResponse> {
        try {
            const candidate = await this.createCandidateService.execute(
                ctx.body,
                ctx.request,
            );

            ctx.set.status = 201;
            return {
                status: Number(ctx.status),
                body: { message: "created", candidate },
            };
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "UNAUTHORIZED") {
                    ctx.set.status = 401;
                    return {
                        status: Number(ctx.status),
                        body: { message: "Unauthorized" },
                    };
                }

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
