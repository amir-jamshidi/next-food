import connectToMongo from "@/configs/db"
import { isAdmin } from "@/middlewares/isAdmin";
import { NextResponse } from "next/server";
import notificationModel from '@/models/notification'
export const POST = async (req) => {
    try {
        connectToMongo();
        const isAdminUser = await isAdmin();
        // if (!isAdminUser) return NextResponse.json({ message: "Not Access" }, { status: 500 });
        const { message, userID, href, type } = await req.json();
        const notification = await notificationModel.create({ message, userID, href, type });
        if (notification) return NextResponse.json({ message: "created" }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 })
    }
}



