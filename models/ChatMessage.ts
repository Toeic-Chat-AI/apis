import mongoose, { Document, Schema } from "mongoose";

export interface IChatMessage extends Document {
  message: string;
  sender: string;
  createdAt: Date;
}

const ChatMessageSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  message: { type: String, required: true },
  sender: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IChatMessage>("ChatMessage", ChatMessageSchema);
