import ChatHistory from "../models/ChatHistory";
import ChatMessage, { IChatMessage } from "../models/ChatMessage";

export const handleCreateMessages = async (
  messagePayload,
  user,
  isNewChat = false
) => {
  const newMessage = new ChatMessage({
    ...messagePayload,
    userId: user._id
  });
  if (isNewChat) {
    const chatHistory = new ChatHistory({
      userId: user._id,
      title: messagePayload.title,
      messages: [messagePayload]
    });
    chatHistory.save();
  }
};
