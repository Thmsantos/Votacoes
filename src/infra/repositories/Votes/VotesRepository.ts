import type { PrismaClient } from "@prisma/client";
import type { VotesRepositoryShape } from "../../../domain/repositories/Votes/VotesRepositoryShape";

export default class VotesRepository implements VotesRepositoryShape {
    private db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;
    }

    findCandidate(name: string, electionId: number) {
        return this.db.candidate.findUnique({
            where: {
                name_electionId: {
                    name,
                    electionId,
                },
            },
        });
    }

    createVote(name: string, electionId: number) {
        return this.db.votes.create({
            data: { name, electionId },
        });
    }

    incrementCandidateVote(name: string, electionId: number) {
        return this.db.candidate.update({
            where: {
                name_electionId: {
                    name,
                    electionId,
                },
            },
            data: {
                votes: { increment: 1 },
            },
        });
    }
}
