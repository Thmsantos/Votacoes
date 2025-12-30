import { Elysia } from "elysia";
import { getResultsController, votesController } from "../../controllers/Votes";
import { elysiaAdapter } from "../adapters/adapter";
import { VotesSchema } from "../../../domain/entities/votes/types";

export const voteRoutes = new Elysia({ prefix: "/vote" })
    .post(
        "/",
        elysiaAdapter(votesController, (ctx) => ({
            body: ctx.body,
        })),
        {
            body: VotesSchema,
        },
    )
    .get(
        "/results",
        elysiaAdapter(getResultsController, () => ({})),
    );
