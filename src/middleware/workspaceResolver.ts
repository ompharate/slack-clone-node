import { NextFunction, Response } from "express";
import { AuthRequest } from "./auth";

type WorkspaceRequest = AuthRequest & { workspaceId?: string };

export type { WorkspaceRequest };


export const resolveWorkspace = (req:WorkspaceRequest,res:Response,next:NextFunction) => {
    const workspaceId = req.params.workspaceId;
    if (!workspaceId) {
        return res.status(400).json({ error: "Workspace ID is required" });
    }
    req.workspaceId = Array.isArray(workspaceId) ? workspaceId[0] : workspaceId;
    next();
}