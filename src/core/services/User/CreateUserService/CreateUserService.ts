import type UserRepository from "../../../../infra/repositories/User/UserRepository";
import type { userBody } from "../../../../presentation/controllers/User/types";

export default class CreateUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute(body: userBody) {
        const { username, password } = body;

        const userExists = await this.userRepository.findByUsername(username);

        if (userExists) {
            throw new Error("USER_EXISTS");
        }

        const user = await this.userRepository.create(
            username,
            password.trim(),
        );
        delete user.password;
        return user;
    }
}
