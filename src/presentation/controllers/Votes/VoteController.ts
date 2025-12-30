import type { Context } from "elysia";
import TakeVoteService from "../../../core/services/Votes/VotesService";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";
import type {
    VoteInput,
    VotesBody,
} from "../../../domain/entities/votes/types";

export default class VoteController implements Controller<
    VoteInput,
    HttpResponse
> {
    private takeVoteService: TakeVoteService;

    constructor(takeVoteService: TakeVoteService) {
        this.takeVoteService = takeVoteService;
    }

    public async handle(
        ctx: Context<{ body: VotesBody }>,
    ): Promise<HttpResponse> {
        try {
            await this.takeVoteService.execute(ctx.body);

            return {
                status: 201,
                body: { message: "Vote recorded" },
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                if (error.message === "CANDIDATE_NOT_FOUND") {
                    return {
                        status: 404,
                        body: { message: "Candidate not found", error },
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
