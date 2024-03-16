import mongoose from "mongoose";

const connectToMongo = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            mongoose.connect(process.env.MONGO);
            console.log('MongoDB Connected');
        }
    } catch (error) {
        throw new Error('We Have Problem To DB')
    }

}
export default connectToMongo;