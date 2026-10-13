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

export const getWorkSpaceById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const workspace = await WorkSpaceModel.findById(id);
        if (!workspace) {
            return res.status(404).json({
                success: false,
                message: "Workspace not found",
                data: null
            })
        }
        return res.status(200).json({
            success: true,
            message: "Workspace fetched successfully",
            data: workspace
        })
    }
    catch (err: any) {
        console.log("Error in fetching Workspace by ID..", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null
        })
    }
}

export const getWorkSpaceByOwner = async (req: Request, res: Response) => {
    try {
        const { owner } = req.params;
        const workspace = await WorkSpaceModel.find({ owner: owner });
        if (!workspace) {
            return res.status(404).json({
                success: false,
                message: "Workspace not found",
                data: null
            })
        }
        return res.status(200).json({
            success: true,
            message: "Workspace fetched successfully",
            data: workspace
        })
    }
    catch (err: any) {
        console.log("Error in fetching Workspace by Owner..", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null
        })
    }
}
