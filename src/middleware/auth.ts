import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../lib/jwt";


const authMiddleware = async (req:Request, res:Response, next: NextFunction) => {
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