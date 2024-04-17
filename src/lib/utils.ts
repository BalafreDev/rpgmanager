import mongoose from "mongoose";
declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}
const MONGODB_URI: string = process.env.MONGODB_URI!;
const connection = { isConnected: 0 }

export const connectDB = async () => {

  try {
    if (connection.isConnected) {
      console.log("Using existing connection")
      return
    }
    const db = await mongoose.connect(MONGODB_URI!)
    connection.isConnected = db.connections[0].readyState
    console.log("Connected to Database")

  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}