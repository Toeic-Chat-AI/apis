import mongoose, { Document, Schema } from "mongoose";

export interface IChatMessage extends Document {
  message: string;
  userId: string;
  createdAt: Date;
}

export const ChatMessageSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  message: { type: String, required: true },
  userId: { type: String, required: true },
  chatHistoryId: { type: Schema.Types.ObjectId, required: true },
  position: { type: Number, required: true },
  type: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IChatMessage>("ChatMessage", ChatMessageSchema);
