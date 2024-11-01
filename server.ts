import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/route";
import envConfig from "./config/dotenv";

const app = express();
const PORT = envConfig.PORT;

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

mongoose
  .connect(`${envConfig.MONGO_URI}/toeic-chat-ai`, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
