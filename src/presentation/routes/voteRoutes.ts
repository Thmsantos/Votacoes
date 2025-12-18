import { Elysia } from "elysia";
import { getResultsController, votesController } from "../controllers/Votes";
import { VotesSchema } from "../../core/value_objects/types/types";

export const voteRoutes = new Elysia({ prefix: "/vote" })
    .post("/", votesController.handle.bind(VotesSchema), { body: VotesSchema })
    .get("/results", getResultsController.handle.bind(getResultsController));
