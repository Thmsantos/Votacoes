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
    id: number;
    name: string;
    key: string;
    adminUserId: number;
};

export type electionDTOWithoutId = {
    name: string;
    key: string;
    adminUserId: number;
};

export const electionDTOWithoutId = t.Object({
    name: t.String(),
    key: t.String(),
    adminUserId: t.Integer(),
});

export const electionDTOSchema = t.Object({
    id: t.Integer(),
    name: t.String(),
    key: t.String(),
    adminUserId: t.Integer(),
});

export const getElectionByIdSchema = t.Object({
    id: t.Number(),
});

export const getElectionByNameSchema = t.Object({
    name: t.String(),
});

export const joinElectionSchema = t.Object({
    electionId: t.Number(),
    key: t.String(),
});

export type electionDTOBodyWithoutId = typeof electionDTOWithoutId.static;

export type electionDTOBody = typeof electionDTOSchema.static;

export type getElectionByIdBody = typeof getElectionByIdSchema.static;

export type getElectionByNameBody = typeof getElectionByNameSchema.static;

export type joinElectionBody = typeof joinElectionSchema.static;

export interface electionDTOInput {
    body: electionDTOBody;
    request: Request;
}

export interface electionDTOWithoutIdInput {
    body: electionDTOBodyWithoutId;
    request: Request;
}

export interface getElectionByIdInput {
    body: getElectionByIdBody;
    request: Request;
}

export interface getElectionByNameInput {
    body: getElectionByNameBody;
    request: Request;
}

export interface joinElectionInput {
    body: joinElectionBody;
    request: Request;
}
