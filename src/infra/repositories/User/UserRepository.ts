import type { PrismaClient } from "@prisma/client";
import type { UserRepositoryShape } from "../../../domain/repositories/User/UserRepositoryShape";

export default class UserRepository implements UserRepositoryShape {
    private db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;
    }

    public async create(username: string, password: string) {
        return this.db.user.create({
            data: { username, password },
        });
    }

    public async findByUsername(username: string) {
        return this.db.user.findFirst({
            where: { username },
        });
    }
}
