import { Schema, models, model, Types } from 'mongoose'

const ticketSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 5
    },
    img: {
        type: String,
        required: false
    },
    userID: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    orderID: {
        type: Types.ObjectId,
        ref: "Order",
        required: false
    },
    sectionID: {
        type: Types.ObjectId,
        ref: "Section",
        required: true
    },
    isAnswer: {
        type: Number,
        default: 0
    },
    answerContent: {
        type: String,
        default: null
    },
    code: {
        type: Number,
        default: () => Number(String(Date.now()).slice(-9))
    }
}, { timestamps: true });

const TicketModel = models.Ticket || model('Ticket', ticketSchema);

export default TicketModel;