import { Response } from "express";
import { uploadFile } from "../services/handleFiles";

export const uploadFileByMessageHistory = async (req: any, res: Response) => {
  try {
    const files = req.files;
    const chatHistoryId = req.params.chatHistoryId;
    const { uploadedData, chatId } = await uploadFile(
      files,
      chatHistoryId,
      req.user
    );
    res.status(200).json({ uploadedData, chatId });
  } catch (err) {
    res.status(err.http_code || 500).json({
      message: err.message || "Internal Server Error",
      error: err.message
    });
  }
};
