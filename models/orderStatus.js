import mongoose from 'mongoose';

const orderStatusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        // enum: ['success', 'error', 'warning'],
        default: 'warning'
    },
    code: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const orderStatusModel = mongoose.models.Status || mongoose.model('Status', orderStatusSchema);

export default orderStatusModel