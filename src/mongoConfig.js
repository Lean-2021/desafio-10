import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const mongoConfig = async () => {
  try {
    const MONGO_USER = process.env.MONGO_USER;
    const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
    const DB = process.env.DB;

    mongoose.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.gxolq.mongodb.net/${DB}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
