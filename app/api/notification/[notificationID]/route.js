import connectToMongo from "@/configs/db"
import { isLogin } from "@/middlewares/isLogin";
import notificationMode from "@/models/notification";
import {NextResponse} from "next/server";

export const PUT = async (_, { params: { notificationID } }) => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return NextResponse.json({ message: 'unAuth' }, { status: 500 });
        const notification = await notificationMode.findOneAndUpdate({ _id: notificationID, userID: isLoginUser._id }, { isSeen: 1 });
        if (!notification) return NextResponse.json({ message: 'error to seen notification' }, { status: 500 });
        return NextResponse.json({ message: 'seened' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 409 });
    }
}