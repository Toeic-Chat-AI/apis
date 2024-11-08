import mongoose, { Document, Schema } from "mongoose";

export interface IFile extends Document {
  username: string;
  password: string;
  fullName: string;
  email: string;
}

const FileSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  fileName: { type: String, required: true },
  fileType: { type: String, required: true },
  filePath: { type: String, required: true },
  ChatHistoryId: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

export default mongoose.model<IFile>("File", FileSchema);
