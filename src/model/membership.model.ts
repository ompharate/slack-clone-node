import mongoose from "mongoose";
import { IMembership } from "../membership/membership.types";

const membershipSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserAuth",
    },
    workspace : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
    },
    role: {
        type: String,
        enum: ["OWNER", "ADMIN", "MEMBER", "GUEST", "BOT"],
        default: "MEMBER"
    },
    status: {
        type: String,
        enum: ["ACTIVE", "PENDING", "SUSPENDED"],
        default: "PENDING"
    },
    invitedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserAuth",
    },
    joinedAt: {
        type: Date,
    }
}, {
    timestamps: true
})

const Membership = mongoose.model<IMembership>("Membership", membershipSchema);
export default Membership;