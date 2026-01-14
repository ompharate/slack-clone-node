import mongoose from "mongoose";
import { IUserProfile } from "../user/user.types";
const userSchema = new mongoose.Schema({
    // user profile fields
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserAuth", required: true },
    fullName: { type: String},
    bio: { type: String, maxlength: 160 },
    avatarUrl: { type: String }
}, {
    timestamps: true
})
const User = mongoose.model<IUserProfile>("User", userSchema);
export default User;