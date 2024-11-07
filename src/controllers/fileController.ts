import { Request, Response } from "express";
import { getFile, uploadFile, uploadManyFiles } from "../services/handleFiles";

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

export const uploadFileByMessageHistory = async (
  req: Request,
  res: Response
) => {
  try {
    console.log(req.body);
    const newMessage = await uploadFile(req.body, req.user);
    res.status(201).json(newMessage);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const uploadManyFilesByMessageHistory = async (
  req: Request,
  res: Response
) => {
  try {
    const newMessage = await uploadManyFiles(req.body, req.user);
    res.status(201).json(newMessage);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
