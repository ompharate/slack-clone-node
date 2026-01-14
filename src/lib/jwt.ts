import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/jwt.types";
import { env } from "../config/env";

const JWT_SECRET = env.JWT_SECRET;

export const generateToken = async (payload: JwtPayload): Promise<string> => {
    return jwt.sign(payload, JWT_SECRET);
}

export const verifyToken = async (token: string): Promise<JwtPayload> => {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
}