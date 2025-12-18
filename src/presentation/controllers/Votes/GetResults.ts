import type { Context } from "elysia";
import type GetResultsService from "../../../core/services/Candidate/GetResults/GetResultsService";

export default class GetResultsController {
    private getResultsService;

    constructor(getResultsService: GetResultsService) {
        this.getResultsService = getResultsService;
    }

    public async handle(ctx: Context) {
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
