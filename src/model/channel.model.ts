import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    workspace: { type: mongoose.Schema.Types.ObjectId, ref: "Workspace", required: true },
    slug: { type: String, required: true, unique: true},
    description: { type: String },
    isPrivate: { type: Boolean, default: false },
    memberCount: { type: Number, default: 0 },
}, { timestamps: true });

export const Channel = mongoose.model("Channel", channelSchema);