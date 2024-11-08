import { Router } from "express";
import { uploadFileByMessageHistory } from "../controllers/fileController";
import uploadMulter from "../config/cloudinaryStorage";

const fileRouter = Router();

fileRouter.post(
  "/files",
  uploadMulter.array("files", 10),
  uploadFileByMessageHistory
);
fileRouter.post(
  "/files/:chatHistoryId",
  uploadMulter.array("files", 10),
  uploadFileByMessageHistory
);

export default fileRouter;
