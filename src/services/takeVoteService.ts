import type { Context } from "elysia";
import type { TakeVoteBody } from "../types/types";
import { prisma } from "../db/db";

export async function takeVote(ctx: Context<{ body: TakeVoteBody }>) {
    const { name } = ctx.body;
    try{
        const exists = await prisma.candidate.findFirst({
            where: { name }
        });
        
        if(!exists){
            return { status: 404, message: 'Candidate not found' }
        }
        
        await prisma.votes.create({
            data: { name }
        })
        
        await prisma.candidate.update({
            where: { name },
            data: {
                votes: { increment: 1 }
            }
        });

        return { status: 201, message: 'created' }
    }  catch ( error ){
        return { status: 500, message: error }
    }
}