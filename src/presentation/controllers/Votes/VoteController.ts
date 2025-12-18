import type { Context } from "elysia";
import type { VotesBody } from "../../../core/value_objects/types/types";
import TakeVoteService from "../../../core/services/Votes/VotesService";

export default class TakeVoteController {
    private takeVoteService: TakeVoteService;

    constructor(takeVoteService: TakeVoteService) {
        this.takeVoteService = takeVoteService;
    }

    public async handle(ctx: Context<{ body: VotesBody }>) {
        try {
            await this.takeVoteService.execute(ctx.body);

            ctx.set.status = 201;
            return { message: "Vote recorded" };
        } catch (error: unknown) {
            if (error instanceof Error) {
                if (error.message === "CANDIDATE_NOT_FOUND") {
                    ctx.set.status = 404;
                    return { message: "Candidate not found" };
                }
            }

            ctx.set.status = 500;
            return { message: "Internal error" };
        }
    }
}
