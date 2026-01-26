import type { PrismaClient } from "@prisma/client";
import type { CandidateRepositoryShape } from "../../../domain/repositories/Candidates/CandidateRepositoryShape";

export default class CandidateRepository implements CandidateRepositoryShape {
    private db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;
    }

    public async findByName(name: string) {
        return this.db.candidate.findFirst({
            where: { name },
        });
    }

    public async create(name: string, electionId: number) {
        return this.db.candidate.create({
            data: { name, votes: 0, electionId },
        });
    }

    public async findMany() {
        return this.db.candidate.findMany();
    }

    public async findResults() {
        return this.db.candidate.findMany({
            select: { name: true, votes: true },
            orderBy: { votes: "desc" },
        });
    }
}
