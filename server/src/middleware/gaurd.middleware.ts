
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const expireToken = (req: Request, res: Response) => {
    res.clearCookie("authToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/"
    });

    return res.status(401).json({
        message: "Token expired or unauthorized"
    });
};

const verifyToken = (req: Request, res: Response): boolean => {
    try {
        const token = req.cookies?.authToken;

        if (!token) {
            expireToken(req, res);
            return false;
        }

        const secret = process.env.JWT_SECRET;

        if (!secret) {
            console.error("JWT_SECRET is not configured");
            res.status(500).json({
                message: "Internal server error"
            });
            return false;
        }

        const decoded = jwt.verify(token, secret);

        if (typeof decoded === "string") {
            expireToken(req, res);
            return false;
        }

        (req as any).user = decoded;
        return true;

    } catch (err) {
        return expireToken(req, res), false;
    }
};

export const UserGaurd = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!verifyToken(req, res)) return;

    if ((req as any).user.role !== "user") {
        return res.status(403).json({
            message: "Unauthorized: User access only"
        });
    }

    return next();
};

export const AdminGaurd = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!verifyToken(req, res)) return;

    if ((req as any).user.role !== "admin") {
        return res.status(403).json({
            message: "Unauthorized: Admin access only"
        });
    }

    return next();
};

export const UserAdminGaurd = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!verifyToken(req, res)) return;

    const role = (req as any).user.role;

    if (role !== "user" && role !== "admin") {
        return res.status(403).json({
            message: "Unauthorized"
        });
    }

    return next();
};
