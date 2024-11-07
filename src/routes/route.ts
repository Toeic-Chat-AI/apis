import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddlewares";
import { consoleMiddlewares } from "../middlewares/consoleMiddlewares";

import authRouter from "./authRoutes";
import messagesRouter from "./chatRoutes";
import chatHistoryRouter from "./chatHistoryRoutes";
import userRouter from "./userRoutes";
import fileRouter from "./fileRoutes";

const routes = Router();

// global middlewares
routes.use(consoleMiddlewares);

// public routes
routes.use(authRouter);

// protected routes
routes.use(authMiddleware);

routes.use(messagesRouter);
// routes.use(fileRouter);
routes.use(chatHistoryRouter);
routes.use(userRouter);

export default routes;
