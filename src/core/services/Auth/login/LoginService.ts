import type UserRepository from "../../../../domain/repositories/User/UserRepository";

export default class LoginService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute(username: string, password: string) {
        const user = await this.userRepository.findByUserName(username);

        if (password.trim() !== user.password) {
            throw new Error("invalid credentials");
        }

        delete user.password;
        return user;
    }
}
