import User from "../model/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AuthTokens } from "./auth.types";
import {RegisterInput,LoginInput} from "./auth.schema"
import { generateToken } from "../lib/jwt";

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = "15m";

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
}

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

        return {accessToken};
    }
}