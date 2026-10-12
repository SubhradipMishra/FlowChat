
import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: [2, "Name must be at least 2 characters"],
            maxlength: [80, "Name cannot exceed 80 characters"],
        },


        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            maxlength: 254,
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                "Please provide a valid email address",
            ],
            index: true,
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters"],
            select: false,
        },

        avatar: {
            type: String,
            default: null,
            trim: true,
        },

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },

        workspace: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Workspace",
            default: null,
            index: true,
        },

        isEmailVerified: {
            type: Boolean,
            default: false,
        },

        status: {
            type: String,
            enum: ["pending", "active", "suspended"],
            default: "active",
            index: true,
        },

        lastLoginAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,

    }
);


userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 12);
});


// userSchema.methods.comparePassword = async function (
//     candidatePassword: any
// ) {
//     return bcrypt.compare(candidatePassword, this.password);
// };

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
