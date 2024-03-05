import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    }
});


const stateModel = mongoose.models.State || mongoose.model('State', stateSchema);

export default stateModel