import type { Context } from "elysia";
import { prisma } from "../db/db";
import type { CandidateBody } from "../types/types";

export async function createCandidate(ctx: Context<{ body: CandidateBody }>) {
    const API_KEY = process.env.API_KEY;
    const { name } = ctx.body;

    try {
        const key = ctx.request.headers.get("api-key");

        if (key !== API_KEY) {
            return { status: 401, message: "Unauthorized" };
        }

        const exists = await prisma.candidate.findFirst({
            where: { name }
        });

        if(exists){
            return { status: 409, message: 'User already exists' }
        }

        await prisma.candidate.create({
            data: { name, votes: 0 }
        })

        return { status: 201, message: 'created' }
    } catch ( error ){
        return { status: 500, message: error }
    }
}