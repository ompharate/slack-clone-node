import { Router, RequestHandler } from "express";
import { createWorkspaceHandler, getWorkspaceHandler } from "./workspace.controller";
import { get } from "node:http";
import authMiddleware from "../middleware/auth";
import { resolveWorkspace } from "../middleware/workspaceResolver";
import { authorize } from "../middleware/authorize";
import { PERMISSIONS } from "../permissions";

const router = Router();

router.post("/create",
    authMiddleware,
    authorize(PERMISSIONS.WORKSPACE_MANAGE),
    createWorkspaceHandler);
router.get("/:id",
    authMiddleware,
    resolveWorkspace as RequestHandler,
    authorize(PERMISSIONS.WORKSPACE_VIEW),
    getWorkspaceHandler);