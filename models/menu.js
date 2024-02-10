import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
}, { timestamps: true });

const model = mongoose.models?.Menu || mongoose.model('Menu', menuSchema);

export default model;