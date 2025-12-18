import type { Context } from "elysia";
import type GetCandidatesService from "../../../core/services/Candidate/GetCandidatesService/GetCandidatesService";

export default class ListCandidateController {
    private getCandidatesService;

    constructor(getCandidatesService: GetCandidatesService) {
        this.getCandidatesService = getCandidatesService;
    }

    public async handle(ctx: Context) {
        try {
            const candidates = await this.getCandidatesService.execute();

            ctx.set.status = 200;
            return candidates;
        } catch {
            ctx.set.status = 500;
            return { message: "Internal error" };
        }
    }
}
