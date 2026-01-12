import app from "./server"

const PORT = process.env.PORT || 3000;


app.get("/api/health", (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});

app.use("/api");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});