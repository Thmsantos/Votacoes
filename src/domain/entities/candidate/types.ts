import { t } from "elysia";

export type Candidate = {
    id: number;
    name: string;
    votes: number;
    electionId: number;
    createdAt: Date;
    updatedAt: Date;
};

export const candidateSchema = t.Object({
    id: t.Integer(),
    name: t.String(),
    votes: t.Integer(),
});

export interface CreateCandidateInput {
    body: CandidateBody;
    request: Request;
}

export const createCandidateSchema = t.Object({
    name: t.String(),
});

export type CandidateBody = typeof createCandidateSchema.static;

export type CandidateDTO = typeof candidateSchema.static;
