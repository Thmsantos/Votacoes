import { t } from 'elysia'

export const candidateSchema = t.Object({
    id: t.Integer(),
    name: t.String(),
    votes: t.Integer(),
})

export const createCandidateSchema = t.Object({
    name: t.String(),
})

export const takeVoteSchema = t.Object({
    name: t.String(),
})

export type Candidate = typeof candidateSchema.static

export type CandidateBody = typeof createCandidateSchema.static

export type TakeVoteBody = typeof takeVoteSchema.static