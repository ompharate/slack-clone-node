import connectDB from "./config/db";
import app from "./server"
const PORT = process.env.PORT || 3000;

(async () => {
    await connectDB();

    // app.get("/api/health", (req, res) => {
    //     res.status(200).json({ status: 'OK', message: 'Server is healthy' });
    // });

    app.use("/api", require("./auth/auth.routes").default);
    app.use("/api/user", require("./user/user.routes").default);

    app.listen(Number(PORT), "0.0.0.0",() => {
        console.log(`Server is running on port ${PORT}`);
    });
})();