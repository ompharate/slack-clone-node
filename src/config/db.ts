import mongoose from "mongoose"
import { env } from "./env";

const MONGODB_URI = env.MONGODB_URI;

let isConnected = false;

export async function connectDB() {
  
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI);
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connectDB;