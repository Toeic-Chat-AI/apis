import ChatHistory, { IChatHistory } from "../models/ChatHistory";
import mongoose from "mongoose";
import ChatMessage from "../models/ChatMessage";

export const handleGetChatHistory = async (user) => {
  const chatHistory = await ChatHistory.find({
    userId: new mongoose.Types.ObjectId(user.id)
  });
  return chatHistory;
};

export const handleUpdateChatHistory = async (
  chatHistory: IChatHistory,
  chatId
) => {
  const updatedChatHistory = await ChatHistory.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(chatId) },
    { title: chatHistory.title },
    { new: true }
  );
  return updatedChatHistory;
};

export const handleDeleteChatHistory = async (chatId) => {
  await ChatHistory.findByIdAndDelete({
    _id: new mongoose.Types.ObjectId(chatId)
  });
  await ChatMessage.deleteMany({
    chatHistoryId: new mongoose.Types.ObjectId(chatId)
  });
};
