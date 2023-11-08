import { UserSchema } from "@entities/User";
import { loginSchema } from "@features/loginUser";

export interface StateSchema {
    user: UserSchema;
    loginForm: loginSchema;
}