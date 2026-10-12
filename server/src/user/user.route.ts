
import { Router } from "express";
import { createUser, getSession, Login } from "./user.controller";
import { UserAdminGaurd } from "../middleware/gaurd.middleware";

const UserRouter = Router();

UserRouter.get("/session", UserAdminGaurd, getSession)
UserRouter.post("/create", createUser);
UserRouter.post("/login", Login);

export default UserRouter;