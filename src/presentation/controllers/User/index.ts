import { createUserService } from "../../../core/services/User/CreateUserService";
import CreateUserController from "./CreateUser";

export const createUserController = new CreateUserController(createUserService);
