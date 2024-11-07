import { Router } from "express";
import {
  getFileByMessageHistory,
  uploadFileByMessageHistory,
  uploadManyFilesByMessageHistory
} from "../controllers/fileController";
import { multerUpload } from "../middlewares/multerMiddlewares";

const fileRouter = Router();

fileRouter.get("/file", getFileByMessageHistory);

fileRouter.post("/file", multerUpload, uploadFileByMessageHistory);
fileRouter.post("/many-files", multerUpload, uploadManyFilesByMessageHistory);

export default fileRouter;
