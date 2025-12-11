import type { Context } from "elysia";
import type { CandidateBody } from "../../types/types";
import type CreateCandidateService from "../../services/CreateCandidate/CreateCandidateService";
import type GetCandidatesService from "../../services/GetCandidatesService/GetCandidatesService";
import type GetResultsService from "../../services/GetResults/GetResultsService";

export default class CandidateController {
    private createCandidateService;

    private getCandidatesService;

    private getResultsService;

    constructor(
        createCandidateService: CreateCandidateService,
        getCandidatesService: GetCandidatesService,
        getResultsService: GetResultsService,
    ) {
        this.createCandidateService = createCandidateService;
        this.getCandidatesService = getCandidatesService;
        this.getResultsService = getResultsService;
    }

    public async create(ctx: Context<{ body: CandidateBody }>) {
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

    public async list(ctx: Context) {
        try {
            const candidates = await this.getCandidatesService.execute();

            ctx.set.status = 200;
            return candidates;
        } catch {
            ctx.set.status = 500;
            return { message: "Internal error" };
        }
    }

    public async results(ctx: Context) {
        try {
            const results = await this.getResultsService.execute();

            ctx.set.status = 200;
            return results;
        } catch {
            ctx.set.status = 500;
            return { message: "Internal error" };
        }
    }
}
