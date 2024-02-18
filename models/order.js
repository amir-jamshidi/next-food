import mongoose from "mongoose";
import { cartSchema } from "./cart";

const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    addressID: {
        type: mongoose.Types.ObjectId,
        ref: "Address",
        required: true
    },
    mealDetails: {
        type: [cartSchema],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    code: {
        type: Number,
        default: Date.now() + Math.round(Math.random() * 10000)
    }

})


const model = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default model