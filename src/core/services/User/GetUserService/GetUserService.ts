import type UserRepository from "../../../../infra/repositories/User/UserRepository";
import type { getUserBody } from "../../../../domain/entities/user/types";

export default class GetUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute(body: getUserBody) {
        const { username } = body;

        const userExists = await this.userRepository.findByUsername(username);

        if (userExists) {
            return userExists;
        }

        return null;
    }
}
