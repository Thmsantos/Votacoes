import type { Context } from "elysia";
import type { TakeVoteBody } from "../../types/types";
import TakeVoteService from "../../services/TakeVote/TakeVoteService";

export default class TakeVoteController {
    private takeVoteService: TakeVoteService;

    constructor(
        takeVoteService: TakeVoteService
    ) {
        this.takeVoteService = takeVoteService;
    }

    public async vote(ctx: Context<{ body: TakeVoteBody }>) {
        return await this.takeVoteService.handle(ctx.body)
    }
}
