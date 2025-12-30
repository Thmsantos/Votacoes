import { t } from "elysia";
import { type User } from "../user/types";
import { type CandidateDTO } from "../candidate/types";

export type Election = {
    id: number;
    name: string;
    key: string;
    adminUserId: number;
    adminUser: User;
    candidates: CandidateDTO[];
    createdAt: Date;
    updatedAt: Date;
};

export type ElectionDTO = {
    name: string;
    key: string;
    adminUserId: number;
};

export const electionDTOSchema = t.Object({
    name: t.String(),
    key: t.String(),
    adminUserId: t.Integer(),
});

export type electionDTOBody = typeof electionDTOSchema.static;

export interface electionDTOInput {
    body: electionDTOBody;
    request: Request;
}
