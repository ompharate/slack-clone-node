import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

export async function completeUserProfile(req:Request, res:Response, next:NextFunction) {
    try {
        const user = await UserService.createUser(req.body);
        return res.status(201).json({ message: "User profile completed successfully", user });
    } catch (error) {
        return res.status(400).json({ error: (error as Error).message });
    }
}