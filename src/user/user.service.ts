import User from "../model/user.model";
import { CompleteProfileInput } from "./user.schema";
import { IUserProfile } from "./user.types";

export class UserService {
    static async createUser(data: CompleteProfileInput): Promise<IUserProfile> {
        const user = await User.create({
            ...data
        })
        return user.toObject();
    }

    static async getUserById(userId: string): Promise<IUserProfile | null> {
        const user = await User.findOne({ userId });
        return user ? user.toObject() : null;
    }
}