import { Request, Response } from "express";

export const getUserProfile = async (req: Request, res: Response) => {
  const user = req.user;
  try {
    const userProfile = user;
    res.status(200).json(userProfile);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
