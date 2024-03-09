import mongoose, { Connection, Mongoose } from "mongoose";

// Object to keep track of the connection status and the retry attempts in cast of connection failure
const connection = {
  isConnected: false,
};

// Function to construct the MongoDB connection string
const getConnectionString = (): string => {
  let connectionUrl = process.env.DATABASE_LOCAL!;

  // Replace placeholders in the connection string with actual values
  connectionUrl =
    connectionUrl && connectionUrl.replace("<username>", process.env.DB_USER!);

  connectionUrl =
    connectionUrl && connectionUrl.replace("<password>", process.env.DB_PASS!);

  return connectionUrl;
};

const connectDB = async (): Promise<void> => {
  console.log("Connecting database...");

  // Check if there is an existing connection
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }

  const mongoURI = getConnectionString();

  try {
    const db: Mongoose = await mongoose.connect(mongoURI, {
      dbName: process.env.DB_NAME,
    });

    console.log("Database Connected");

    connection.isConnected = true;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default connectDB;
