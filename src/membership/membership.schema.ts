import {z} from "zod"

export const membershipSchema = z.object({
    body: z.object({
        user: z.string().length(24),
        workspace: z.string().length(24),
        role: z.enum(["OWNER", "ADMIN","MEMBER","GUEST","BOT"]).default("MEMBER"),
        status: z.enum(["ACTIVE", "PENDING","SUSPENDED"]).default("PENDING"),
        invitedBy: z.string().length(24).optional(),
        joinedAt: z.date().optional()
    })
})

export type Membership = z.infer<typeof membershipSchema>["body"];