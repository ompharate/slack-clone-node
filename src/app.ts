/// <reference path="./types/express.d.ts" />
import "./config/env"
import connectDB from "./config/db";
import app from "./server"
import { env } from "./config/env";
import authRoutes from "./auth/auth.routes";
import userRoutes from "./user/user.routes";
import workspaceRoutes from "./workspace/workspace.routes";
import channelRoutes from "./channel/channel.routes";

const PORT = env.PORT;
(async () => {
    await connectDB();

    app.get("/api/health", (req, res) => {
        res.status(200).json({ status: 'OK', message: 'Server is healthy' });
    });

    app.use("/api", authRoutes);
    app.use("/api/user", userRoutes);
    app.use("/api/workspace", workspaceRoutes);
    app.use("/api/channels", channelRoutes);

    app.listen(Number(PORT), "0.0.0.0",() => {
        console.log(`Server is running on port ${PORT}`);
    });
})();