export const PERMISSIONS = {
    WORKSPACE_MANAGE: "workspace:manage",
    WORKSPACE_VIEW: "workspace:view",
    MEMBER_REMOVE: "member:remove",

    CHANNEL_CREATE: "channel:create",
    CHANNEL_DELETE: "channel:delete",
    CHANNEL_VIEW: "channel:view",

    MESSAGE_SEND: "message:send",
    MESSAGE_DELETE: "message:delete",
} as const;

export type Permission = typeof PERMISSIONS[keyof typeof PERMISSIONS];