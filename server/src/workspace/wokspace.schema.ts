import mongoose, { Schema } from "mongoose";


const WorkSpaceSchema = new Schema({
    name: {
        type: String,
        required: [true, "Workspace name is required"],
        trim: true,
        lowercase: true,
        unique: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Owner is required"]
    },
    buisnessCategory: {
        type: [String],
        required: [true, "Business Category is required"]

    },
    buisnessSubCetegory: {
        type: [String],
        required: [true, "Business Sub Category is required"]
    },
    avatar: {
        type: String,
        default: "",
    },
    plan: {
        type: String,
        enum: ["free_trial", "starter", "pro", "enterprise"],
        default: "free_trial",
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    trialStartedAt: {
        type: Date,
        default: Date.now(),

    },
    trialEndAt: {
        type: Date,
        required: [true, "Trial end date is required"],
    },
    subscriptionStatus: {
        type: String,
        enum: [
            "trialing",
            "active",
            "expired",
            "past_due",
            "cancelled",
        ],
        default: "trialing",
    },



}, { timestamps: true })


const WorkSpaceModel = mongoose.model("WorkSpace", WorkSpaceSchema)

export default WorkSpaceModel
