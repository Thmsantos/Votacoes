import { loginService } from "../../../core/services/Auth/login";
import LoginController from "./LoginController";

export const loginController = new LoginController(loginService);
