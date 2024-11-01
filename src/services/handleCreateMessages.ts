import ChatHistory from "../models/ChatHistory";
import ChatMessage from "../models/ChatMessage";
import mongoose from "mongoose";

export const handleCreateMessages = async (messagePayload, user) => {
  const isNewChat = !messagePayload.chatHistoryId;
  let chatHistoryId;

  if (isNewChat) {
    const chatHistory = new ChatHistory({
      userId: user.id,
      title: messagePayload.message.text
    });
    await chatHistory.save();
    chatHistoryId = chatHistory._id;
  } else {
    chatHistoryId = new mongoose.Types.ObjectId(messagePayload.chatHistoryId);
  }

  const newMessage = new ChatMessage({
    message: messagePayload.message,
    userId: new mongoose.Types.ObjectId(user.id),
    createdAt: new Date(),
    chatHistoryId: chatHistoryId
  });

  await newMessage.save();

  return newMessage;
};
