import connectDB from "./config/db";
import app from "./server"
import authUser from "./auth/auth.routes"
const PORT = process.env.PORT || 3000;

(async () => {
    await connectDB();

    app.get("/api/health", (req, res) => {
        res.status(200).json({ status: 'OK', message: 'Server is healthy' });
    });

    app.use("/api", authUser);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();