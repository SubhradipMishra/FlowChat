import { Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from "cors";
import UserRouter from "./user/user.route";

import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL as string).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
})

import express from "express";
import WorkSpaceRouter from "./workspace/workspace.route";
const app = express();

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Server is running",
        success: true,
        data: {}
    });
});


app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/user', UserRouter);
app.use('/api/workspace', WorkSpaceRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});