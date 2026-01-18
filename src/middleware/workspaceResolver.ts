import { NextFunction, Response,Request } from "express";

export const resolveWorkspace = (req:Request,res:Response,next:NextFunction) => {
    const workspaceId = req.params.workspaceId;
    if (!workspaceId) {
        return res.status(400).json({ error: "Workspace ID is required" });
    }
    req.workspaceId = Array.isArray(workspaceId) ? workspaceId[0] : workspaceId;
    next();
}