import mongoose, { Document, Schema } from "mongoose";

export interface IFile extends Document {
  fileName: string;
  fileType: string;
  filePath: string;
  chatHistoryId: Schema.Types.ObjectId;
}

const FileSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  fileName: { type: String, required: true },
  fileType: { type: String, required: true },
  filePath: { type: String, required: true },
  chatHistoryId: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

export default mongoose.model<IFile>("files", FileSchema);
