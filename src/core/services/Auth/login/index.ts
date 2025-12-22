import { userRepository } from "../../../../domain/repositories/User";
import LoginService from "./LoginService";

export const loginService = new LoginService(userRepository);
