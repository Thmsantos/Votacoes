import Elysia from "elysia";
import {
    createElectionController,
    getElectionsByIdController,
    getElectionsByNameController,
} from "../../controllers/Elections";
import { elysiaAdapter } from "../adapters/adapter";
import {
    electionDTOSchema,
    getElectionByIdSchema,
    getElectionByNameSchema,
} from "../../../domain/entities/elections/types";

export const electionsRoutes = new Elysia({ prefix: "/elections" })
    .post(
        "/",
        elysiaAdapter(createElectionController, (ctx) => ({
            body: ctx.body,
            request: ctx.request,
        })),
        { body: electionDTOSchema },
    )
    .post(
        "/electionsById",
        elysiaAdapter(getElectionsByIdController, (ctx) => ({
            body: ctx.body,
            request: ctx.request,
        })),
        { body: getElectionByIdSchema },
    )
    .post(
        "/electionsByName",
        elysiaAdapter(getElectionsByNameController, (ctx) => ({
            body: ctx.body,
            request: ctx.request,
        })),
        { body: getElectionByNameSchema },
    );
