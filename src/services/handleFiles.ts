import { generateSignedUrl } from "../config/cloudinary";
import { Response } from "express";
import File from "../models/File";
import ChatHistory from "../models/ChatHistory";

export const getFile = async (req: Request, res: Response) => {
  return;
};

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
  files.forEach(async (file) => {
    const signUrl = await generateSignedUrl(
      file.filename,
      file.mimetype.split("/")[1]
    );
    
    const newFile = await File.create({
      fileName: file.originalname,
      fileType: file.mimetype,
      filePath: signUrl,
      ChatHistoryId: chatId
    });
    console.log(newFile);
    uploadedData.push({ ...newFile, path: signUrl });
  });
  return { uploadedData, chatId };
};
