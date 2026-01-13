import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

export const generateToken = async (payload: object): Promise<string> => {
    return jwt.sign(payload, JWT_SECRET);
}

export const verifyToken = async (token: string): Promise<any> => {
    return jwt.verify(token, JWT_SECRET);
}