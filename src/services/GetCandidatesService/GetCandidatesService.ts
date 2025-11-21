import { prisma } from "../../db/db";

export default class GetCandidatesService {
    public async handle() {
        try {
            const candidates = await prisma.candidate.findMany({})
            return { status: 200, data: candidates };
        } catch (error) {
            return { status: 500, message: error }
        }
    }
}