import type { PrismaClient } from "@prisma/client";

export default class UserRepository {
    private db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;
    }

    public async create(username: string, password: string) {
        return this.db.user.create({
            data: { username, password },
        });
    }

    public async findByUserName(username: string) {
        return this.db.user.findFirst({
            where: { username },
        });
    }
}
