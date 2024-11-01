import { Router } from "express";
import {
  getMessagesByChatHistory,
  sendMessage
} from "../controllers/chatController";

const messagesRouter = Router();

messagesRouter.get("/messages/:id", getMessagesByChatHistory);
messagesRouter.post("/messages", sendMessage);

export default messagesRouter;
