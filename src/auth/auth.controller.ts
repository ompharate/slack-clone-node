import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export const registerController = async (req: Request, res: Response) => {
   try {
         const token = await AuthService.register(req.body);
         return res.status(201).json({ message: "User registered successfully", token });
   } catch (error:any) {
        return res.status(400).json({ error: error.message });
   }
}

export const loginController = async (req: Request, res: Response) => {
    try {
        const token = await AuthService.login(req.body);
        return res.status(200).json({ message: "Login successful", token });
    } catch (error:any) {
        return res.status(400).json({ error: error.message });
    }
}