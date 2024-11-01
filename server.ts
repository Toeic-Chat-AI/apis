import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import envConfig from "./src/config/dotenv";
import routes from "./src/routes/route";

const app = express();
const PORT = envConfig.PORT;

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
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
