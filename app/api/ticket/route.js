import connectToMongo from "@/configs/db"
import { isLogin } from "@/middlewares/isLogin";
import notificationModel from "@/models/notification";
import TicketModel from "@/models/ticket";
import { NextResponse } from "next/server";
export const POST = async (req) => {
    try {
        connectToMongo();
        const { body, score = 5, orderID = null, sectionID } = await req.json();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return NextResponse.json({ message: "UnAuth" }, { status: 500 });
        const ticket = await TicketModel.create({
            body, score, userID: isLoginUser._id, orderID, sectionID
        })
        if (!ticket) return NextResponse.json({ message: "Error In Create Ticket" })
        const notification = {
            userID: isLoginUser._id, message: `به زودی به تیکت شما پاسخ میدهیم`, type: "success", isSeen: 0
        }
        await notificationModel.create(notification)
        return NextResponse.json({ message: "created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
