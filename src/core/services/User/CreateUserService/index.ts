import { userRepository } from "../../../../infra/repositories/User";
import CreateUserService from "./CreateUserService";

export const createUserService = new CreateUserService(userRepository);
