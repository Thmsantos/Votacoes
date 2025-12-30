import type { Context } from "elysia";
import type CreateCandidateService from "../../../core/services/Candidate/CreateCandidateService/CreateCandidateService";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";
import type {
    CandidateBody,
    CreateCandidateInput,
} from "../../../domain/entities/candidate/types";

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

            return {
                status: 201,
                body: { message: "created", candidate },
            };
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "UNAUTHORIZED") {
                    return {
                        status: 401,
                        body: { message: "Unauthorized", error },
                    };
                }

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
