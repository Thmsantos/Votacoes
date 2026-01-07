import type { PrismaClient } from "@prisma/client";
import type { ElectionsRepositoryShape } from "../../../domain/repositories/Elections/ElectionsRepositoryShape";
import type {
    Election,
    ElectionDTO,
} from "../../../domain/entities/elections/types";

export default class ElectionsRepository implements ElectionsRepositoryShape {
    private db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;
    }

    public async create(election: ElectionDTO): Promise<Election> {
        return this.db.elections.create({ data: { election } });
    }

    public async findById(id: number): Promise<Election | null> {
        return this.db.elections.findUnique({ where: { id } });
    }

    public async findByName(name: string): Promise<Election | null> {
        return this.db.elections.findFirst({ where: { name } });
    }
}
