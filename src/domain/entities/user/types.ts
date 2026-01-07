import { t } from "elysia";

export type User = {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

export const userSchema = t.Object({
    id: t.Integer(),
    username: t.String(),
    password: t.String(),
});

export const createUserSchema = t.Object({
    username: t.String(),
    password: t.String(),
});

export type user = typeof userSchema.static;

export type userBody = typeof createUserSchema.static;

export interface CreateUserInput {
    body: userBody;
}
