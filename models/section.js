import { Schema, models, model } from 'mongoose'

const sectionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
}, { timestamps: true });

const sectionModel = models.Section || model('Section', sectionSchema);

export default sectionModel