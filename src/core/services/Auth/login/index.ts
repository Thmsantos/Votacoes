import { userRepository } from "../../../../infra/repositories/User";
import LoginService from "./LoginService";

export const loginService = new LoginService(userRepository);
