import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/route";
import envConfig from "./config/dotenv";
import serverless from "serverless-http";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(`${envConfig.MONGO_URI}/toeic-chat-ai`, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Set up API routes
app.use("/api", routes);

// Export the app as a serverless function
module.exports.handler = serverless(app);
