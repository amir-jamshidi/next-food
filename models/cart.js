import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    mealID: {
        type: mongoose.Types.ObjectId,
        ref: 'Meal',
        required: true
    },
    sizeID: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 1
    },
    price: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const model = mongoose.models.Cart || mongoose.model('Cart', cartSchema);

export default model