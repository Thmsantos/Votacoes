import { prisma } from "../../../infra/persistence/db/db.ts";
import TakeVoteRepository from "./TakeVoteRepository";

export const takeVoteRepository = new TakeVoteRepository(prisma);
