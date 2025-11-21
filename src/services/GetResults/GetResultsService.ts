import { prisma } from "../../db/db";

export default class GetResultsService {
    public async handle() {
        try {
            const candidates = await prisma.candidate.findMany({
                select: { name: true, votes: true },
                orderBy: { votes: "desc" }
            });

            return { status: 200, data: candidates };
        } catch (error) {
            return { status: 500, message: error };
        }
    }
}

