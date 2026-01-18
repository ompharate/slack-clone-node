import { Router, RequestHandler } from "express";
import { createWorkspaceHandler, getWorkspaceHandler } from "./workspace.controller";
import authMiddleware from "../middleware/auth";
import { resolveWorkspace } from "../middleware/workspaceResolver";
import { authorize } from "../middleware/authorize";
import { PERMISSIONS } from "../permissions";
import { createWorkspaceSchema } from "./workspace.schema";
import { validate } from "../middleware/validator";
import  {resolveMembership} from "../middleware/membershipResolver";
const router = Router();

router.post("/create",
    authMiddleware,
    validate(createWorkspaceSchema),
    createWorkspaceHandler);
router.get("/:workspaceId",
    authMiddleware,
    resolveWorkspace as RequestHandler,
    resolveMembership as RequestHandler,
    authorize(PERMISSIONS.WORKSPACE_VIEW) as RequestHandler,
    getWorkspaceHandler);

export default router;