import { Router } from "express";
import { uploadFileByMessageHistory } from "../controllers/fileController";
import uploadMulter from "../config/cloudinaryStorage";

const fileRouter = Router();

fileRouter.post("/files", uploadMulter, uploadFileByMessageHistory);
fileRouter.post(
  "/files/:chatHistoryId",
  uploadMulter,
  uploadFileByMessageHistory
);

export default fileRouter;
