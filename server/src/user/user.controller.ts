import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "./user.schema";


export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role = "user" } = req.body;

        const userExit = await UserModel.findOne({ email });
        if (userExit) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
                data: null
            })
        }
        const newUser = new UserModel({
            name,
            email,
            password,
            role
        })
        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser
        })
    }
    catch (err: any) {
        console.error("user creation error:", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null
        })
    }
}


const generateToken = (user: any) => {

    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        avatar: user.avatar,
        lastLoginAt: user.lastLoginAt,
        workspace: user.workspace,
        status: user.status
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '7d' })

    return token;

}

export const getSession = (req: Request, res: Response) => {
    const session = (req as any).user;
    try {
        return res.status(200).json({ message: "Session found!", data: session });
    }
    catch (err: any) {
        console.log("Session error", err);
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const userExist: any = await UserModel.findOne({ email }).select("+password");

        if (!userExist) return res.status(404).json({ message: "User not found!" })

        const isMatch = await bcrypt.compare(password, userExist?.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid password!" })

        const token = generateToken(userExist);

        res.cookie("authToken", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,

            // sameSite: "strict",
            // path: "/"
        });

        return res.status(200).json({ message: "Login successful!", authToken: token });
    }
    catch (err: any) {
        console.log("Login error", err);
        return res.status(500).json({ message: "Internal server error" })
    }
}