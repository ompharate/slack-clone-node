import { Request, Response } from "express";
import User from "../model/user.model";
import jwt from "jsonwebtoken";

export const registerController = async (req: Request, res: Response) => {
    const { body } = req;

    await User.create(body);
    return res.status(201).json({ message: "User registered successfully" });

}

export const loginController = async (req: Request, res: Response) => {

    const {email,password} = req.body;

    const user = await User.findOne({email,password});

    if(!user){
        return  res.status(401).json({ message: "Invalid email or password" });
    }

    const token = await jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET || "secretkey",)

    return res.status(200).json({ message: "User logged in successfully", token });
}