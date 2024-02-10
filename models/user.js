import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

const model = mongoose.models.User || mongoose.model('User', userSchema);

export default model