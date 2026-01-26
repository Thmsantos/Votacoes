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
    private createCandidateService: CreateCandidateService;

    constructor(createCandidateService: CreateCandidateService) {
        this.createCandidateService = createCandidateService;
    }

    public async handle(
        ctx: Context<{ body: CandidateBody }>,
    ): Promise<HttpResponse> {
        try {
            const candidate = await this.createCandidateService.execute(
                ctx.body,
            );

            if (candidate === "permission denied") {
                return {
                    status: 401,
                    body: { message: "permission denied" },
                };
            }

            if (candidate === "candidate already exists") {
                return {
                    status: 401,
                    body: { message: "candidate already exists" },
                };
            }

            return {
                status: 201,
                body: { message: "created", candidate },
            };
        } catch (error) {
            return {
                status: 500,
                body: { message: "Internal error", error },
            };
        }
    }
}
