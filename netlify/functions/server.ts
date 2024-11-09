import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import serverless from "serverless-http";
import envConfig from "../../src/config/dotenv";
import routes from "../../src/routes/route";

const app = express();

app.use(
  cors({
    origin: true // Allow requests from all origins
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
