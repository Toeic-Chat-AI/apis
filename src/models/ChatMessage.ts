import mongoose, { Document, Schema } from "mongoose";
import { EMessagePosition, EMessageType } from "../constants/EMessage";

export interface IChatMessage extends Document {
  message: {
    position: EMessagePosition;
    type: EMessageType;
    title: string;
    text: string;
  };
  chatHistoryId: Schema.Types.ObjectId;
  userId: string;
  createdAt: Date;
}

export const ChatMessageSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userId: { type: String, required: true },
  chatHistoryId: { type: Schema.Types.ObjectId, required: true },
  // message body
  message: {
    position: {
      type: String,
      enum: Object.values(EMessagePosition),
      required: true
    },
    type: { type: String, enum: Object.values(EMessageType), required: true },
    title: { type: String, required: true },
    text: { type: String, required: true }
  },
  // message metadata
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IChatMessage>("ChatMessage", ChatMessageSchema);
