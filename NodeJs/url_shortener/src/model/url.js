import mongoose, { mongo } from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
}, { timestamps: true });

const URL = mongoose.model('URL', urlSchema);

export default URL;