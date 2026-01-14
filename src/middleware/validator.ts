import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export const validate = (schema: ZodSchema) => (req:Request,res:Response,next:NextFunction) => {
        try {
            const result =  schema.safeParse({
                body: req.body,
                query: req.query,
                params: req.params
            });
            if (!result.success) {
                return res.status(400).json({ error: result.error });
            }
            next();
        } catch (error) {
            return res.status(400).json({ error: error });
        }
}