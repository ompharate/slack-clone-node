export interface JwtPayload {
    userId: string;
    username: string;
    email: string;
    role: "human" | "bot";
}