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

export async function getUserProfile(req:Request, res:Response, next:NextFunction) {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }
        const user = await UserService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(400).json({ error: (error as Error).message });
    }
}