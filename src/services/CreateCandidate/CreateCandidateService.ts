import { prisma } from "../../db/db";
import type { CandidateBody } from "../../types/types";

export default class CreateCandidateService {
    public async handle(body: CandidateBody, request: Request) {
        const API_KEY = process.env.API_KEY;
        const { name } = body;

        const key = request.headers.get("api-key");
        if (key !== API_KEY) return { status: 401, message: "Unauthorized" };

        const exists = await prisma.candidate.findFirst({ where: { name } });
        if (exists) return { status: 409, message: "User already exists" };

        await prisma.candidate.create({
            data: { name, votes: 0 },
        });

        return { status: 201, message: "created" };
    }
}

