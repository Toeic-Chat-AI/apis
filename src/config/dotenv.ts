// Load environment variables from .env file
import dotenv from "dotenv";

dotenv.config();

const envConfig = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,

  FRONTEND_URL: process.env.FRONTEND_URL,
  DEPLOY_URL: process.env.DEPLOY_URL,

  CLOUDINARY_KEY: process.env.CLOUDINARY_KEY,
  CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME
} as const;

export default envConfig;
