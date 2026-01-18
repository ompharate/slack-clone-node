import { Router, RequestHandler } from "express";
import { createWorkspaceHandler, getWorkspaceHandler } from "./workspace.controller";
import authMiddleware from "../middleware/auth";
import { resolveWorkspace } from "../middleware/workspaceResolver";
import { authorize } from "../middleware/authorize";
import { PERMISSIONS } from "../permissions";

const router = Router();

router.post("/create",
    authMiddleware,
    createWorkspaceHandler);
router.get("/:workspaceId",
    authMiddleware,
    resolveWorkspace as RequestHandler,
    authorize(PERMISSIONS.WORKSPACE_VIEW) as RequestHandler,
    getWorkspaceHandler);

export default router;