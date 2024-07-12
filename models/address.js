import mongoose from "mongoose";


export const addressSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    lat: {
        type: Number,
        required: false
    },
    lng: {
        type: Number,
        required: false
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
    },
    fullAddress: {
        type: String,
        required: true
    }
}, { timestamps: true });

const model = mongoose.models.Address || mongoose.model('Address', addressSchema);

export default model;