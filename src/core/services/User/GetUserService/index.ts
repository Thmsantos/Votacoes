import { userRepository } from "../../../../infra/repositories/User";
import GetUserService from "./GetUserService";

export const getUserService = new GetUserService(
    userRepository
)