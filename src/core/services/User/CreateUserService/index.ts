import { userRepository } from "../../../../domain/repositories/User";
import CreateUserService from "./CreateUserService";

export const createUserService = new CreateUserService(userRepository);
