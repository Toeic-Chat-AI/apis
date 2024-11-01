import { Request, Response } from "express";
import ChatMessage from "../models/ChatMessage";
import { handleCreateMessages } from "../services/handleCreateMessages";

export const getMessagesByChatHistory = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(req);
  try {
    const messages = await ChatMessage.find({ chatHistoryId: id }).sort({
      createdAt: 1
    });
    res.json(messages);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const isNewChat = req.params.isNewChatHistory;
    const newMessage = await handleCreateMessages(
      req.body,
      req.user,
      isNewChat
    );
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).send(err);
  }
};
