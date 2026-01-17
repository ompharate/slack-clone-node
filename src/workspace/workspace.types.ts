import { Document } from "mongoose";

export interface IWorkspace extends Document {
    name: string;
    createdBy: string;
}
