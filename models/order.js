import mongoose from "mongoose";
import { cartSchema } from "./cart";
import { addressSchema } from "./address";
const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    addressID: addressSchema,
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
    },
    stateID: {
        type: mongoose.Types.ObjectId,
        ref: "State",
        required: true
    }

}, { timestamps: true })


const model = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default model