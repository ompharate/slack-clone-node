import { Types } from "mongoose";

export interface IUserProfile extends Document {
    userId: Types.ObjectId;
    fullName?: string;
    bio?: string;
    avatarUrl?: string;
}
