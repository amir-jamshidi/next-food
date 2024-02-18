import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    reciver: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

const model = mongoose.models.Address || mongoose.model('Address', addressSchema);

export default model;