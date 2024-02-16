import { NextResponse } from "next/server"
import cartModel from '@/models/cart'
export const POST = async (req) => {

    try {

        const { mealID, sizeID, size, price } = await req.json();

        const cart = await cartModel.create({
            mealID, sizeID, size, price, totalPrice: price
        })
     
        return NextResponse.json(cart);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}