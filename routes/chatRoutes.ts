import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/chatController";

const messagesRouter = Router();

messagesRouter.get("/messages", getMessages);
messagesRouter.post("/messages", sendMessage);

export default messagesRouter;
