class User {
    private _id!: number;
    private _username: string;
    private _password: string;
    private _createdAt!: Date;
    private _updatedAt!: Date;

    constructor(name: string, _password: string) {
        this._username = name;
        this._password = _password;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get username(): string {
        return this._username;
    }

    public set username(username: string) {
        this._username = username;
    }

    public get password(): string {
        return this._password;
    }

    public set password(password: string) {
        this._password = password;
    }

    public set createdAt(createdAt: Date) {
        this._createdAt = createdAt;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public set updatedAt(updatedAt: Date) {
        this._updatedAt = updatedAt;
    }

    public get updatedAt(): Date {
        return this._updatedAt;
    }
}

export default User;
