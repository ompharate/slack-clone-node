import { JwtPayload } from "./jwt.types";
import { IMembership } from "../membership/membership.types";
import { IWorkspace } from "../workspace/workspace.types";

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
            membership?: IMembership;
            workspace?: IWorkspace;
            workspaceId?: string;
        }
    }
}