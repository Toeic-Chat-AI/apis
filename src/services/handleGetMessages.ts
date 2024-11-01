import ChatMessage from "../models/ChatMessage";

export const handleGetMessages = async (req, res, chatId) => {
  const chatHistoryMessages = await ChatMessage.find({
    chatHistoryId: chatId
  });
  const messages = chatHistoryMessages.map((message) => message.message);
  return messages;
};
