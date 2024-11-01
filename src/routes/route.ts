import authRouter from "./authRoutes";
import messagesRouter from "./chatRoutes";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddlewares";
import { consoleMiddlewares } from "../middlewares/consoleMiddlewares";

const routes = Router();

// global middlewares
routes.use(consoleMiddlewares);

// public routes
routes.use(authRouter);

// protected routes
routes.use(authMiddleware);
routes.use(messagesRouter);

export default routes;
