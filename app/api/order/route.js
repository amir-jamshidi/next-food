import connectToMongo from "@/configs/db"
import { isLogin } from "@/middlewares/isLogin"
import cartModel from '@/models/cart'
import orderModel from '@/models/order'
import { NextResponse } from "next/server"

export const POST = async (req) => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        const { price } = await req.json();

        const cart = await cartModel.find({ userID: isLoginUser._id }).lean();

        if (!cart.length) return NextResponse.json({ message: "no cart" }, { status: 500 })

        const order = await orderModel.create({
            userID: isLoginUser._id,
            mealDetails: cart,
            price,
        })

        if (order) {
            await cartModel.deleteMany({ userID: isLoginUser._id }).lean();
            return NextResponse.json({ message: 'success' }, { status: 201 })
        }
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

}