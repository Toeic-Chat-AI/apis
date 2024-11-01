import mongoose, { Document, Schema } from "mongoose";

export interface IChatHistory extends Document {
  userId: string;
  messageIds: string[];
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

const ChatHistorySchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
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
