import authRouter from "./authRoutes";
import messagesRouter from "./chatRoutes";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddlewares";

const routes = Router();

// public routes
routes.use(authRouter);

// protected routes
routes.use(authMiddleware);
routes.use("/messages", messagesRouter);

export default routes;
