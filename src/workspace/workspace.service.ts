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
}