import mongoose from "mongoose";

const channelMemberSchema = new mongoose.Schema({
    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Channel",
        required: true,
        index: true
    },
    membership: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Membership",
        required: true,
        index: true
    },
    joinedAt: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true });

const ChannelMember = mongoose.model("ChannelMember", channelMemberSchema);
export default ChannelMember;