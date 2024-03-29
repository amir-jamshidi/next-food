import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    },
    inventory: {
        type: Number,
        default: 50
    },
    sellerID: {
        type: [mongoose.Types.ObjectId],
        ref: 'Seller',
        required: true
    },
    categoryID: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    sizes: {
        type: [sizeSchema],
        required: true
    },
    basePrice: {
        type: Number,
        required: true
    },
    sellCount: {
        type: Number,
        required: true
    }
}, { timestamps: true });


const model = mongoose.models.Meal || mongoose.model('Meal', schema);

export default model