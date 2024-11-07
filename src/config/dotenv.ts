// Load environment variables from .env file
import dotenv from "dotenv";

dotenv.config();

const envConfig = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  FRONTEND_URL: process.env.FRONTEND_URL,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME
};

export default envConfig;
