import type { PrismaClient } from "@prisma/client";
import type { VotesRepositoryShape } from "../../../domain/repositories/Votes/VotesRepositoryShape";

export default class VotesRepository implements VotesRepositoryShape {
    private db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;
    }

    findCandidateByName(name: string) {
        return this.db.candidate.findFirst({
            where: { name },
        });
    }

    createVote(name: string, electionId: number) {
        return this.db.votes.create({
            data: { name, electionId },
        });
    }

    incrementCandidateVote(name: string) {
        return this.db.candidate.update({
            where: { name },
            data: {
                votes: { increment: 1 },
            },
        });
    }
}
