import {z} from "zod"

export const createWorkspaceSchema = z.object({
    body: z.object({
        name: z.string().min(3).max(50),
        createdBy: z.string().length(24)
    })
})

export type createWorkspace = z.infer<typeof createWorkspaceSchema>["body"];