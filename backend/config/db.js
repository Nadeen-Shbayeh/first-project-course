// Import mongoose, which is a library for working with MongoDB
import mongoose from "mongoose";

// Define an asynchronous function to connect to the MongoDB database
export const connectDB = async () => {
    try {
        // Attempt to establish a connection to MongoDB using the connection string from environment variables
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // If successful, log the host of the connected database
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // If there is an error, log the error message
        console.error(`Error: ${error.message}`);
    }
};
