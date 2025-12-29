import { prisma } from "../../persistence/db/db";
import CandidateRepository from "./CandidateRepository";

export const candidateRepository = new CandidateRepository(prisma);
