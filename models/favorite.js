import { Schema, Types, models, model } from 'mongoose'

const schema = new Schema({
    userID: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    mealID: {
        type: Types.ObjectId,
        ref: 'Meal',
        required: true
    }
}, { timestamps: true })

const FavoriteModel = models.Favorite || model('Favorite', schema);

export default FavoriteModel