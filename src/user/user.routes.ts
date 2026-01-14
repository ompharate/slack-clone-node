import { Router } from "express";
import authMiddleware from "../middleware/auth";
import { completeUserProfile } from "./user.controller";

const router = Router();

router.post("/profile",authMiddleware,completeUserProfile)

export default router;