import { Router } from "express";
import { completeProfileSchema } from "./user.schema";
import { completeUserProfile, getUserProfile } from "./user.controller";
import { validate } from "../middleware/validator";
import authMiddleware from "../middleware/auth";

const router = Router();

router.post("/profile",
    validate(completeProfileSchema),
    authMiddleware,
    completeUserProfile)

router.get("/profile",
    authMiddleware,
    getUserProfile);

export default router;