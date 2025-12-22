import { createUserService } from "../../../core/services/User/CreateUserService";
import CreateUserController from "./CreateUserController";

export const createUserController = new CreateUserController(createUserService);
