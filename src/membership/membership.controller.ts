import { Request,Response } from "express";
import { MembershipService } from "./membership.service";

export async function addMembershipController(req:Request, res:Response) {
    try {
        const membership = await MembershipService.addMembership(req.body);
        return res.status(201).json({ message: "Membership added successfully", membership });
    } catch (error) {
        return res.status(400).json({ error: (error as Error).message });
    }
}