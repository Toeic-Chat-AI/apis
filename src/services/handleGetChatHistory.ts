import ChatHistory from "../models/ChatHistory";
import mongoose from "mongoose";

export const handleGetChatHistory = async (user) => {
  const chatHistory = await ChatHistory.find({
    userId: new mongoose.Types.ObjectId(user.id)
  });
  return chatHistory;
};
