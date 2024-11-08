import { v2 as cloudinary } from "cloudinary";
import envConfig from "./dotenv";

cloudinary.config({
  cloud_name: envConfig.CLOUDINARY_NAME,
  api_key: envConfig.CLOUDINARY_KEY,
  api_secret: envConfig.CLOUDINARY_SECRET
});

export function generateSignedUrl(publicId: string, type) {
  // Generate a signed URL for a specific resource
  const url = cloudinary.utils.url(publicId, {
    version: null
  });
  return `${url}.${type}` ;
}

export default cloudinary;
