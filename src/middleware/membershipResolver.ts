import { NextFunction, Request, Response } from "express";
import { MembershipService } from "../membership/membership.service";
import { IMembership } from "../membership/membership.types";


export const resolveMembership = async (req:Request,res:Response,next:NextFunction) => {
    const membership = await MembershipService.getMemberships({ user: req.user?.userId, workspace: req.params.workspaceId }) as IMembership[];
    if (membership.length === 0) {
        return res.status(404).json({ error: "Membership not found" });
    }
    req.membership = membership[0] as IMembership;
    next();
}