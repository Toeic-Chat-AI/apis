import express from "express";
import { authRegister, authLogin } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/register", authRegister);
authRouter.post("/login", authLogin);

export default authRouter;
