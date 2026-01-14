import User from "../model/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AuthTokens } from "./auth.types";
import { RegisterInput, LoginInput } from "./auth.schema"
import { generateToken } from "../lib/jwt";


export class AuthService {
    static async register(data: RegisterInput): Promise<AuthTokens> {
        const { email, password } = data;

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            throw new Error("User already exists with this email");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            ...data,
            password: hashedPassword
        })

        const accessToken = await generateToken({
            userId: newUser._id.toString(),
            username: newUser.username,
            email: newUser.email,
            role: "user"
        });

        return { accessToken };
    }

    static async login(data: LoginInput): Promise<AuthTokens> {
        const { email, password } = data;

        const user = await User.findOne({
            email
        });

        if (!user) {
            throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }

        const accessToken = await generateToken({
            userId: user._id.toString(),
            username: user.username,
            email: user.email,
            role: user.role,
        })

        return { accessToken };
    }
}
