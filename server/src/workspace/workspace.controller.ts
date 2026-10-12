import { Request, Response } from "express";
import WorkSpaceModel from "./wokspace.schema";


export const createWorkSpace = async (req: any, res: Response) => {
    try {

        const { name, buisnessCategory, buisnessSubCetegory, avatar = "", plan = "free_trial", subscriptionStatus = "trialing", isActive = true, trial } = req.body;
        const trialStartedAt = Date.now();
        const trialEndAt = Date.now() + 3 * 24 * 60 * 60 * 1000;
        const workspace = new WorkSpaceModel({
            name: name,
            owner: req.user._id,
            buisnessCategory: buisnessCategory,
            buisnessSubCetegory: buisnessSubCetegory,
            avatar: avatar,
            plan: plan,
            subscriptionStatus: subscriptionStatus,
            isActive: isActive,
            trial: trial,
            trialStartedAt: trialStartedAt,
            trialEndAt: trialEndAt,


        })
        await workspace.save();
        return res.status(201).json({
            success: true,
            message: "Workspace created successfully",
            data: workspace
        })


    }
    catch (err: any) {
        console.log("Error in workspace creation.", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null
        })
    }
}


export const getWorkSpaces = async (req: Request, res: Response) => {
    try {

        const workspaces = await WorkSpaceModel.find();
        return res.status(200).json({
            success: true,
            message: "Workspaces fetched successfully",
            data: workspaces
        })

    }
    catch (err: any) {
        console.log("Error in fetching Workspaces..", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null
        })
    }

}

