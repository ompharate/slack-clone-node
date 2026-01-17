import { Request, Response } from "express";
import { JwtPayload } from "../types/jwt.types";
import { verifyToken } from "../lib/jwt";

type AuthRequest = Request & { user?: JwtPayload };

export type { AuthRequest };

const authMiddleware = async (req:AuthRequest, res:Response, next: Function) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decode = await verifyToken(token);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized" });
    }
}

export default authMiddleware;