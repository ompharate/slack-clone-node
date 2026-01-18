// middleware/membershipResolver.ts
import { NextFunction, Request, Response } from "express";
import { MembershipService } from "../membership/membership.service";

export const resolveMembership = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validate required data exists
        if (!req.user?.userId) {
            return res.status(401).json({ error: "Authentication required" });
        }

        if (!req.params.workspaceId) {
            return res.status(400).json({ error: "Workspace ID required" });
        }

        // Fetch membership
        const memberships = await MembershipService.getMemberships({
            user: req.user.userId,
            workspace: req.params.workspaceId
        });

        if (memberships.length === 0) {
            return res.status(403).json({ error: "Access denied: Not a workspace member" });
        }

        // Attach to request
        req.membership = memberships[0];
        next();
    } catch (error) {
        console.error("Membership resolution error:", error);
        return res.status(500).json({ error: "Failed to verify membership" });
    }
}