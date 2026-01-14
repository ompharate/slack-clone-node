import {z} from "zod"

export const completeProfile = z.object({
    body: z.object({
        userId: z.string().length(24),
        fullName: z.string().min(3).max(50).optional(),
        bio: z.string().max(160).optional(),
        avatarUrl: z.string().url().optional()
    })
})

export type CompleteProfileInput = z.infer<typeof completeProfile>["body"];