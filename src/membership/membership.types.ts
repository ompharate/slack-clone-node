import { Document, ObjectId, Types } from "mongoose";

export interface IMembership extends Document {
    user: Types.ObjectId;
    workspace: Types.ObjectId;
    role: "OWNER" | "ADMIN" | "MEMBER" | "GUEST" | "BOT";
    status: "ACTIVE" | "PENDING" | "SUSPENDED";
    invitedBy?: string;
    joinedAt?: Date;
}

