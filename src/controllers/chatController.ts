import { Request, Response } from "express";
import { handleCreateMessages } from "../services/handleCreateMessages";
import { handleGetMessages } from "../services/handleGetMessages";

export const getMessagesByChatHistory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await handleGetMessages(req.body, req.user, id);
    res.status(200).json(response);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const newMessage = await handleCreateMessages(req.body, req.user);
    res.status(201).json(newMessage);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
