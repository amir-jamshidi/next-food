import { Schema, model, models, Types } from 'mongoose'

const notificationSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    userID: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    type: {
        type: String,
        required: true
    },
    isSeen: {
        type: Number,
        default: 0
    },
    href: {
        type: String,
        required: false
    }
},{timestamps:true});

const notificationModel = models.Notification || model('Notification', notificationSchema);

export default notificationModel