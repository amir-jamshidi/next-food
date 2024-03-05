import connectToMongo from "@/configs/db"
import { isLogin } from "@/middlewares/isLogin"
import cartModel from '@/models/cart'
import stateModel from "@/models/state"
import { NextResponse } from "next/server"
import orderModel from '@/models/order';

export const POST = async (req) => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        const { price, addressID } = await req.json();

        const cart = await cartModel.find({ userID: isLoginUser._id }).lean();

        if (!cart.length) return NextResponse.json({ message: "no cart" }, { status: 500 })

        const { _id: stateID } = await stateModel.findOne({ code: 1 });

        console.log(stateID)
        const order = await orderModel.create({
            userID: isLoginUser._id,
            mealDetails: cart,
            price,
            addressID,
            stateID
        })

        if (order) {
            await cartModel.deleteMany({ userID: isLoginUser._id }).lean();
            console.log(req.nextUrl);
            return NextResponse.json({ message: 'success' }, { status: 201 })
        }
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

}