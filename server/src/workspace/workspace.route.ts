import Router from "express";
import { AdminGaurd, UserAdminGaurd } from "../middleware/gaurd.middleware";
import { createWorkSpace, getWorkSpaces } from "./workspace.controller";

const WorkSpaceRouter = Router();

WorkSpaceRouter.post("/create", UserAdminGaurd, createWorkSpace);
WorkSpaceRouter.get("/", AdminGaurd, getWorkSpaces);

export default WorkSpaceRouter;