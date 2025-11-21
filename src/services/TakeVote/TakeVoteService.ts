import { prisma } from "../../db/db";
import type { TakeVoteBody } from "../../types/types";

export default class TakeVoteService {
    public async handle(body: TakeVoteBody) {
        const { name } = body;

        try {
            const exists = await prisma.candidate.findFirst({ where: { name } });
            if (!exists) return { status: 404, message: "Candidate not found" };

            await prisma.votes.create({ data: { name } });

            await prisma.candidate.update({
                where: { name },
                data: { votes: { increment: 1 } },
            });

            return { status: 201, message: "created" };
        } catch (error) {
            return { status: 500, message: error };
        }
    }
}
