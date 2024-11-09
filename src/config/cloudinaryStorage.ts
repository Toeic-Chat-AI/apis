import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary";
import multer from "multer";

export const CLOUD_STRAGE_FOLDER = "toeic-chat-files";
const UNIQUE_SUFFIX = Date.now() + "-" + Math.round(Math.random() * 1e9);

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    // @ts-ignore
    folder: CLOUD_STRAGE_FOLDER,
    format: (req, file) => file.mimetype.split("/")[1],
    public_id: (req, file) => UNIQUE_SUFFIX + "-" + file.originalname
  }
});

const uploadMulter = multer({ storage: storage }).array("files", 10);

export default uploadMulter;
