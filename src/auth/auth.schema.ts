import {z} from "zod"

export const registerSchema = z.object({
    body: z.object({
        username: z.string().min(3).max(20),
        email: z.string().email(),
        password: z.string().min(6).max(100),
        role: z.enum(["human", "bot"]).optional().default("human")
    })
});

export const loginSchema = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string().min(6).max(100)
    })
});

export type RegisterInput = z.infer<typeof registerSchema>["body"];
export type LoginInput = z.infer<typeof loginSchema>["body"];