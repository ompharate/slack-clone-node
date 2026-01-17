import { Document } from "mongoose";

export interface IMembership extends Document {
    user: string;
    workspace: string;
    role: "OWNER" | "ADMIN" | "MEMBER" | "GUEST" | "BOT";
    status: "ACTIVE" | "PENDING" | "SUSPENDED";
    invitedBy?: string;
    joinedAt?: Date;
}

