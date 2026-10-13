import Router from "express";
import { AdminGaurd, UserAdminGaurd } from "../middleware/gaurd.middleware";
import { createWorkSpace, getWorkSpaceByOwner, getWorkSpaceById, getWorkSpaces } from "./workspace.controller";

const WorkSpaceRouter = Router();

WorkSpaceRouter.post("/create", UserAdminGaurd, createWorkSpace);
WorkSpaceRouter.get("/", AdminGaurd, getWorkSpaces);
WorkSpaceRouter.get("/:id", UserAdminGaurd, getWorkSpaceById);
WorkSpaceRouter.get("/owner/:owner", UserAdminGaurd, getWorkSpaceByOwner);

export default WorkSpaceRouter;