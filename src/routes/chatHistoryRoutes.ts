import { Router } from "express";
import { getChatHistoryByUser } from "../controllers/chatHistoryController";

const chatHistoryRouter = Router();

const baseUrl = "/chat-history";

chatHistoryRouter.get(`${baseUrl}`, getChatHistoryByUser);

export default chatHistoryRouter;
