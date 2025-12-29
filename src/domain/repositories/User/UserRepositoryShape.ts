export interface User {
    id: string;
    username: string;
    password: string;
}
export interface UserRepositoryShape {
    findByUsername(username: string): Promise<User | null>;
    create(username: string, password: string): Promise<User>;
}
