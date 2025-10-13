import { type Context } from "elysia";
import type { CandidateBody, TakeVoteBody } from "./types/types";
import { prisma } from "./db/db";

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

export async function getCandidates() {
    try{
        const candidates = await prisma.candidate.findMany({})
        return { status: 200, data: candidates };
    } catch ( error ){
        return { status: 500, message: error}
    }
}

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
        
        await updateVotes()
        return { status: 201, message: 'created' }
    }  catch ( error ){
        return { status: 500, message: error }
    }

}

export async function getResults() {
    try{
        const candidates = await prisma.candidate.findMany({
            select: {
                name: true,
                votes: true
            },
            orderBy: {
                votes: 'desc' 
            }
        })
    
        return { status: 200, data: candidates }
    } catch ( error ){
        return { status: 500, message: error }
    }
};

async function updateVotes() {
    const candidates = await prisma.candidate.findMany({
        select: { name: true }
    });

    for (const e of candidates) {
        const count = await prisma.votes.count({
            where: { name: e.name }
        });

        await prisma.candidate.update({
            where: { name: e.name },
            data: { votes: count }
        });
    }
}
