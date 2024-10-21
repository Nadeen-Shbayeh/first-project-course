// Import express using the default export
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";



const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();


app.use(express.json());

app.use("/api/products",productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server stated at http://localhost:"+ PORT);
})


