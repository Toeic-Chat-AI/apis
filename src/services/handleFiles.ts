import cloudinary from "../config/cloudinary";

export const getFile = async (req: Request, res: Response) => {
  return;
};

export const uploadFile = async (req, res) => {
  await cloudinary.uploader.upload(
    req.file.path,
    (error, result) => {
      if (error) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: error.message
        });
      }
      return result;
    }
  );
};

export const uploadManyFiles = async (req: Request, res: Response) => {
  return;
};
