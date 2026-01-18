import {z} from "zod"
export const createChannelSchema = z.object({
    body: z.object({
        name: z.string().min(3).max(50),
        workspaceId: z.string().length(24),
        slug: z.string().min(3).max(50),
        description: z.string().max(200).optional(),
        isPrivate: z.boolean().optional().default(false),
        memberCount: z.number().optional().default(0)
    })
})

export type createChannel = z.infer<typeof createChannelSchema>["body"];