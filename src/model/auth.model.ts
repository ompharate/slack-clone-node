import mongoose from "mongoose";

const userAuthSchema = new mongoose.Schema({

    // auth fields
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["human", "bot"], default: "human" },


}, {
    timestamps: true
})


const UserAuth = mongoose.model("UserAuth", userAuthSchema);

export default UserAuth;