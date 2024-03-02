import connectToMongo from "@/configs/db"
import { isLogin } from "@/middlewares/isLogin"
import cartModel from '@/models/cart'
import orderModel from '@/models/order'
import orderStatusModel from "@/models/orderStatus"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        const { price, addressID } = await req.json();

        const cart = await cartModel.find({ userID: isLoginUser._id }).lean();

        if (!cart.length) return NextResponse.json({ message: "no cart" }, { status: 500 })

        const { _id: stateID } = await orderStatusModel.findOne({ code: 1 });
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
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

}