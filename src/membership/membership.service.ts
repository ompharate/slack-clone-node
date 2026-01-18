import Membership from "../model/membership.model";
import { IMembership } from "./membership.types";

export class MembershipService {
    static async addMembership(data: IMembership): Promise<IMembership> {
        const membership = await Membership.create({
            ...data
        });
        return membership.toObject();
    }

    static async getMemberships(query: any): Promise<IMembership[]> {
        const memberships = await Membership.find(query).lean();
        return memberships;
    }   
}