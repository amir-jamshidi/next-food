
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    }
}, { timestamps: true })

const model = mongoose.models.Seller || mongoose.model('Seller', schema);
export default model