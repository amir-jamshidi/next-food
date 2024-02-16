import { NextResponse } from "next/server"
import cartModel from '@/models/cart'
import { isLogin } from "@/middlewares/isLogin";
export const POST = async (req) => {
    try {

        const isLoginUser = await isLogin();

        if (!isLoginUser) return NextResponse.json({ message: 'UnAuth' }, { status: 401 });

        const { mealID, sizeID, size, price, } = await req.json();

        const cart = await cartModel.create({
            userID: isLoginUser._id, mealID, sizeID, size, price, totalPrice: price
        })
        if (cart) {
            return NextResponse.json(cart, { status: 201 });
        }
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}