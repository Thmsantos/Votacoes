import type { PrismaClient } from "@prisma/client";

export default class CandidateRepository {
    private db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;
    }

    public async findByName(name: string) {
        return this.db.candidate.findFirst({
            where: { name },
        });
    }

    public async create(name: string) {
        return this.db.candidate.create({
            data: { name, votes: 0 },
        });
    }

    public async findMany() {
        return this.db.candidate.findMany();
    }

    public async findResults() {
        console.log("bate aq?", await this.db.candidate.findMany());

        return this.db.candidate.findMany({
            select: { name: true, votes: true },
            orderBy: { votes: "desc" },
        });
    }
}
