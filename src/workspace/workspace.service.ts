import Workspace from "../model/workspace.model";
import { createWorkspace } from "./workspace.schema";
import { IWorkspace } from "./workspace.types";

export class WorkspaceService {
    static async createWorkspace(data: createWorkspace): Promise<IWorkspace> {
        const workspace = await Workspace.create({
            ...data
        })
        return workspace.toObject();
    }

    static async getWorkspaceById(id: string): Promise<IWorkspace | null> {
        const workspace = await Workspace.findById(id).lean();
        return workspace;
    }
}