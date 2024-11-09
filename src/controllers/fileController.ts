import { Request, Response } from "express";
import { getFile, uploadFile } from "../services/handleFiles";

export const getFileByMessageHistory = async (req: Request, res: Response) => {
  try {
    const response = await getFile(req.body, req.user);
    res.status(200).json(response);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const uploadFileByMessageHistory = async (req: any, res: Response) => {
  try {
    const files = req.files;
    const chatHistoryId = req.params.chatHistoryId;
    const { uploadedData, chatId } = await uploadFile(
      files,
      chatHistoryId,
      req.user
    );
    console.log(uploadedData, "heheeh");
    res.status(200).json({ uploadedData, chatId });
  } catch (err) {
    res.status(err.http_code || 500).json({
      message: err.message || "Internal Server Error",
      error: err.message
    });
  }
};
