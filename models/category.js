import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
}, { timestamps: true });

const model = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default model