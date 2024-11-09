import { generateSignedUrl } from "../config/cloudinary";
import File from "../models/File";
import ChatHistory from "../models/ChatHistory";
import mongoose from "mongoose";

export const uploadFile = async (files, chatHistoryId, user) => {
  let chatId = chatHistoryId;
  if (!chatHistoryId) {
    const chatHistory = await new ChatHistory({
      userId: user.id,
      title: files[0].originalname
    });
    await chatHistory.save();
    chatId = chatHistory._id;
    //create a new chat history
  }
  const uploadedData = [];
  const uploadPromises = files.map(async (file) => {
    const signUrl = await generateSignedUrl(
      file.filename,
      file.mimetype.split("/")[1]
    );

    const newFile = (
      await File.create({
        fileName: file.originalname,
        fileType: file.mimetype,
        filePath: signUrl,
        chatHistoryId: new mongoose.Types.ObjectId(chatId)
      })
    ).toObject();

    uploadedData.push({ ...newFile, path: signUrl });
  });

  await Promise.all(uploadPromises);
  return { uploadedData, chatId };
};
