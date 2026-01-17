import { Request, Response } from "express";
import { WorkspaceService } from "./workspace.service"

export const createWorkspaceHandler = async (req: Request, res: Response) => {
    try {
        const workspace = await WorkspaceService.createWorkspace(req.body);
        return res.status(201).json({
            status: "success",
            data: workspace
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        })
    }
}