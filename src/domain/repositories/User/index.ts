import { prisma } from "../../../infra/persistence/db/db";
import UserRepository from "./UserRepository";

export const userRepository = new UserRepository(prisma);
