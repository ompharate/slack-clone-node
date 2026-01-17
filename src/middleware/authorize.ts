import { NextFunction, Response } from "express";
import { ROLE_PERMISSIONS, Role } from "../permissions";
import { MembershipRequest } from "./membershipResolver";

export const authorize = (permission: string) => {
    return (req: MembershipRequest, res: Response, next: NextFunction) => {
        const role = req.membership.role as Role;

        if(!ROLE_PERMISSIONS[role]?.includes(permission)) {
            return  res.status(403).json({ error: "Forbidden: You don't have enough permissions" });
        }

        next();
    }
}