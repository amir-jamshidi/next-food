import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        default: `User${Date.now()}`
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        default: 'USER'
    }
}, { timestamps: true });

const model = mongoose.models.User || mongoose.model('User', userSchema);

export default model