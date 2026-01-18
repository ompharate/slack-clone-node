import { NextFunction, Request,Response } from "express";
import { ROLE_PERMISSIONS, Role } from "../permissions";

export const authorize = (permission: string) => {
    return (req: Request, res: Response, next: NextFunction) => {

        if (!req.membership) {
            return res.status(403).json({ error: "Forbidden: No membership found" });
        }

        const role = req.membership.role as Role;

        if(!ROLE_PERMISSIONS[role]?.includes(permission)) {
            return  res.status(403).json({ error: "Forbidden: You don't have enough permissions" });
        }

        next();
    }
}