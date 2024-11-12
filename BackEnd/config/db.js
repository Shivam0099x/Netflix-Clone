import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
    console.log("Connected to MongoDB!" + conn.connection.host);
  } catch(error){
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};
