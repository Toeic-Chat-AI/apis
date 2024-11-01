import mongoose, { Document, Schema } from "mongoose";
import { ChatMessageSchema, IChatMessage } from "./ChatMessage";

export interface IChatHistory extends Document {
  userId: string;
  messages: IChatMessage[];
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

const ChatHistorySchema: Schema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  messages: { type: [ChatMessageSchema], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ChatHistorySchema.pre<IChatHistory>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const ChatHistory =
  mongoose.models.ChatHistory ||
  mongoose.model<IChatHistory>("ChatHistory", ChatHistorySchema);

export default ChatHistory;
