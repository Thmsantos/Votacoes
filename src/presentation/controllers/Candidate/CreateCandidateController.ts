import type { Context } from "elysia";
import type { CandidateBody } from "../../../core/value_objects/types/types";
import type CreateCandidateService from "../../../core/services/Candidate/CreateCandidate/CreateCandidateService";

export default class CreateCandidateController {
    private createCandidateService;

    constructor(createCandidateService: CreateCandidateService) {
        this.createCandidateService = createCandidateService;
    }

    public async handle(ctx: Context<{ body: CandidateBody }>) {
        try {
            await this.createCandidateService.execute(ctx.body, ctx.request);

            ctx.set.status = 201;
            return { message: "created" };
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "UNAUTHORIZED") {
                    ctx.set.status = 401;
                    return { message: "Unauthorized" };
                }

                if (error.message === "USER_EXISTS") {
                    ctx.set.status = 409;
                    return { message: "User already exists" };
                }
            }

            ctx.set.status = 500;
            return { message: "Internal error" };
        }
    }
}
