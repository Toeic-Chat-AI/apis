// Load environment variables from .env file
import dotenv from "dotenv";

dotenv.config();

const envConfig = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET
};

export default envConfig;
