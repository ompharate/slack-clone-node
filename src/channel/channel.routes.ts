import Router from "express";
import authMiddleware from "../middleware/auth";
import { authorize } from "../middleware/authorize";
import { PERMISSIONS } from "../permissions";
import { validate } from "../middleware/validator";
import { createChannelSchema } from "./channel.scheam";
import { resolveWorkspace } from "../middleware/workspaceResolver";

const router = Router();

router.post("/create",
    authMiddleware,
    validate(createChannelSchema),
    authorize(PERMISSIONS.CHANNEL_CREATE),
    resolveWorkspace,
    createChannelHandler
)

export default router;