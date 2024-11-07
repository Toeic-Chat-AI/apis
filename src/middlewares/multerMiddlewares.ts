import multer from "multer";

const multerStorage = multer.diskStorage({
  fileName: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

export const multerUpload = multer({
  storage: multerStorage
});
