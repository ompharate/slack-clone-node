import { NextFunction, Request, Response } from "express";
import { MembershipService } from "../membership/membership.serivce";

type MembershipRequest = Request & { membership?: any };

export type { MembershipRequest };

export const resolveMembership = async (req:MembershipRequest,res:Response,next:NextFunction) => {
    const membership = await MembershipService.getMemberships({ user: req.params.userId, workspace: req.params.workspaceId });
    if (membership.length === 0) {
        return res.status(404).json({ error: "Membership not found" });
    }
    req.membership = membership[0];
    next();
}