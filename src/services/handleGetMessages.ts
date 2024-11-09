import mongoose from "mongoose";
import ChatMessage from "../models/ChatMessage";
import File from "../models/File";

export const handleGetMessages = async (req, res, chatId) => {
  const chatHistoryMessages = await ChatMessage.find({
    chatHistoryId: new mongoose.Types.ObjectId(chatId)
  });
  const chatHistoryFiles = await File.find({
    chatHistoryId: new mongoose.Types.ObjectId(chatId)
  });
  const messages = chatHistoryMessages.map((message) => message.message);
  return { messages, files: chatHistoryFiles };
};
