import { Elysia } from "elysia";
import {
    createCandidateController,
    listCandidateController,
} from "../../controllers/Candidate";
import { elysiaAdapter } from "../adapters/adapter";
import { createCandidateSchema } from "../../../domain/entities/candidate/types";

export const candidateRoutes = new Elysia({ prefix: "/candidates" })
    .post(
        "/",
        elysiaAdapter(createCandidateController, (ctx) => ({
            body: ctx.body,
            request: ctx.request,
        })),
        { body: createCandidateSchema },
    )
    .get(
        "/",
        elysiaAdapter(listCandidateController, () => ({})),
    );
