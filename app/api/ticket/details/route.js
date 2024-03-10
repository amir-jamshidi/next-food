import connectToMongo from "@/configs/db"
import sectionModel from "@/models/section";
import orderModel from '@/models/order';
import { isLogin } from "@/middlewares/isLogin";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        connectToMongo();
        const sections = await sectionModel.find({}).lean();
        const isLoginUser = await isLogin();
        const orders = await orderModel.find({ userID: isLoginUser._id });
        return NextResponse.json({ sections, orders });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}