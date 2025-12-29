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
    private createCandidateService: CreateCandidateService;

    constructor(createCandidateService: CreateCandidateService) {
        this.createCandidateService = createCandidateService;
    }

    public async handle(
        ctx: Context<{ body: CandidateBody }>,
    ): Promise<HttpResponse> {
        try {
            const API_KEY = process.env.API_KEY;
            const key = ctx.request.headers.get("api-key");

            if (String(key) !== String(API_KEY)) {
                throw new Error("UNAUTHORIZED");
            }

            const candidate = await this.createCandidateService.execute(
                ctx.body,
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
                        body: { message: "Unauthorized" },
                    };
                }

                if (error.message === "USER_EXISTS") {
                    return {
                        status: 409,
                        body: { message: "User already exists" },
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
