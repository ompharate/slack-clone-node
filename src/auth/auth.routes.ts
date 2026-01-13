import { Router } from "express";
import { validate } from "../middleware/validator";
import { loginSchema, registerSchema } from "./auth.schema";
import { loginController, registerController } from "./auth.controller";

const router = Router()


router.post("/register",validate(registerSchema), registerController);
router.post("/login",validate(loginSchema), loginController);

export default router;