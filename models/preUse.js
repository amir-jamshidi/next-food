import mongoose from "mongoose";

const preUserSchema = new mongoose.Schema({

    phone: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    expire: {
        type: Number,
        required: true
    }

}, { timestamps: true });

const model = mongoose.models.PreUser || mongoose.model('PreUser', preUserSchema);


export default model