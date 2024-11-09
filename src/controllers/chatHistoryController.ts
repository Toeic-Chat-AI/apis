import { Request, Response } from "express";
import {
  handleDeleteChatHistory,
  handleGetChatHistory,
  handleUpdateChatHistory
} from "../services/handleChatHistory";

export const getChatHistoryByUser = async (req: Request, res: Response) => {
  try {
    const messages = await handleGetChatHistory(req.user);
    res.status(200).json(messages);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const updateChatHistory = async (req: Request, res: Response) => {
  try {
    const chatId = req.params.id;
    const { data } = req.body;
    const updatedChatHistory = await handleUpdateChatHistory(data, chatId);
    res.json(updatedChatHistory);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const deleteChatHistory = async (req: Request, res: Response) => {
  try {
    const chatId = req.params.id;
    await handleDeleteChatHistory(chatId);
    res.status(200).json({ message: "Delete Chat History" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
