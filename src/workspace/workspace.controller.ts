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

export const getWorkspaceHandler = async (req: Request, res: Response) => {
    try {
        const workspace = await WorkspaceService.getWorkspaceById(req.params.id as string);
        if (!workspace) {
            return res.status(404).json({
                status: "error",
                message: "Workspace not found"
            });
        }
        return res.status(200).json({
            status: "success",
            data: workspace
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
}