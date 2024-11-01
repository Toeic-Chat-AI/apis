import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  fullName: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true }
});

export default mongoose.model<IUser>("User", UserSchema);
