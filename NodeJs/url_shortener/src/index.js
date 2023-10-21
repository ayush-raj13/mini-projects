import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import urlRoutes from "./routes/urlRoutes.js";
import path from "path";
import staticRoutes from "./routes/staticRoutes.js"
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Views
app.set('view engine', 'ejs');
app.set('views', path.resolve("src/views"));
app.use('/', staticRoutes);

// Routes
app.use('/url', urlRoutes);

const PORT = process.env.PORT;
app.listen(PORT || 5000, async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected");
        console.log(`App listening on http://localhost:${PORT || 5000}`)
    } catch (error) {
        console.log(error);
    }
});