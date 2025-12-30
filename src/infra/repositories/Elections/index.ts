import { prisma } from "../../persistence/db/db";
import ElectionsRepository from "./ElectionsRepository";

export const electionsRepository = new ElectionsRepository(prisma);
