import { Request, Response } from "express";
import ChatMessage from "../models/ChatMessage";

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await ChatMessage.find();
    res.json(messages);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const sendMessage = async (req: Request, res: Response) => {
  const { message, sender } = req.body;
  try {
    const newMessage = new ChatMessage({ message, sender });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).send(err);
  }
};
