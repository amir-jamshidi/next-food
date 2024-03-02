import mongoose from 'mongoose';

const orderStatusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'warning'
    },
    code: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const orderStatusModel = mongoose.models.State || mongoose.model('State', orderStatusSchema);

export default orderStatusModel