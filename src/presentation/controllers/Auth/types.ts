import { t } from "elysia";

export const loginSchema = t.Object({
    username: t.String(),
    password: t.String(),
});

export type loginBody = typeof loginSchema.static;

export interface LoginInput {
    body: loginBody;
}
