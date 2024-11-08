import { Router } from "express";
import {
  getChatHistoryByUser,
  updateChatHistory,
  deleteChatHistory
} from "../controllers/chatHistoryController";

const chatHistoryRouter = Router();

const baseUrl = "/chat-history";

chatHistoryRouter.get(`${baseUrl}`, getChatHistoryByUser);
chatHistoryRouter.put(`${baseUrl}/:id`, updateChatHistory);
chatHistoryRouter.delete(`${baseUrl}/:id`, deleteChatHistory);

export default chatHistoryRouter;
