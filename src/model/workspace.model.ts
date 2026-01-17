import mongoose from "mongoose";
import { IWorkspace } from "../workspace/workspace.types";
const workspaceSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserAuth",
        required: true
    },
}, {
    timestamps: true
})

const Workspace = mongoose.model<IWorkspace>("Workspace", workspaceSchema);

export default Workspace;