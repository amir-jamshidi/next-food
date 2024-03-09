import connectToMongo from "@/configs/db"
import { isLogin } from "@/middlewares/isLogin";
import userModel from '@/models/user';
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        connectToMongo()
        const isLoginUser = await isLogin();
        if (!isLoginUser) return NextResponse.json({ message: 'unAuth' }, { status: 500 });
        const { fullname } = await req.json();
        const user = await userModel.findOneAndUpdate({ _id: isLoginUser._id }, { fullname });
        if (!user) return NextResponse.json({ message: 'notfound user' }, { status: 500 });
        return NextResponse.json({ message: 'edited' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}