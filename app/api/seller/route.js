import { NextResponse } from "next/server"
import sellerModel from '@/models/seller'
import connectToMongo from "@/configs/db"
export const POST = async (req) => {
    try {
        connectToMongo();
        const { name } = await req.json()
        const seller = await sellerModel.create({ name });
        return NextResponse.json(seller);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}