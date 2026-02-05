import { t } from "elysia";

export type VotesBody = typeof VotesSchema.static;

export interface VoteInput {
    body: VotesBody;
}

export const VotesSchema = t.Object({
    name: t.String(),
    electionId: t.Number(),
});
