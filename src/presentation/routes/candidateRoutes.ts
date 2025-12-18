import { Elysia } from "elysia";
import { createCandidateSchema } from "../../core/value_objects/types/types";
import {
    createCandidateController,
    listCandidateController,
} from "../controllers/Candidate";

export const candidateRoutes = new Elysia({ prefix: "/candidates" })
    .post(
        "/",
        createCandidateController.handle.bind(createCandidateController),
        {
            body: createCandidateSchema,
        },
    )
    .get("/", listCandidateController.handle.bind(listCandidateController));
