import { Request, Response } from "express";
import { handleGetChatHistory } from "../services/handleGetChatHistory";

export const getChatHistoryByUser = async (req: Request, res: Response) => {
  try {
    const messages = await handleGetChatHistory(req.user);
    res.json(messages);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
