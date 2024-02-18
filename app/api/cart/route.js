import { NextResponse } from "next/server"
import cartModel from '@/models/cart'
import { isLogin } from "@/middlewares/isLogin";
export const POST = async (req) => {
    try {

        const isLoginUser = await isLogin();

        if (!isLoginUser) return NextResponse.json({ message: 'UnAuth' }, { status: 401 });

        const { mealID, sizeID, size, price, action } = await req.json();

        const hasMeal = await cartModel.findOne({ mealID, userID: isLoginUser._id, sizeID }).lean();

        if (hasMeal) {
            if (action === 'PLUS') {
                await cartModel.findOneAndUpdate({ mealID, userID: isLoginUser._id, sizeID }, { $inc: { count: +1, totalPrice: hasMeal.price } }).lean()
            } else if (action === 'MINUS') {
                await cartModel.findOneAndUpdate({ mealID, userID: isLoginUser._id, sizeID }, { $inc: { count: -1, totalPrice: -(hasMeal.price) } }).lean()
            } else {
                await cartModel.findOneAndDelete({ mealID, userID: isLoginUser._id, sizeID }).lean();
            }
            return NextResponse.json({ message: 'success action' }, { status: 200 });
        }

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