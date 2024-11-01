import { Router } from "express";
import { getUserProfile } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/user-profile", getUserProfile);

export default userRouter;
