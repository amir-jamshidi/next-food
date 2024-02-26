import connectToMongo from "@/configs/db"
import { isLogin } from "@/middlewares/isLogin";
import TicketModel from "@/models/ticket";
import { NextResponse } from "next/server";
export const POST = async (req) => {
    try {
        connectToMongo();
        const { body, score, orderID, sectionID } = await req.json();
        const isLoginUser = await isLogin();
        // if (!isLoginUser) return NextResponse.json({ message: "UnAuth" }, { status: 500 });
        const ticket = await TicketModel.create({
            body, score, userID: "65c9f520362bd6d411b44bd6", orderID, sectionID
        })
        if (!ticket) return NextResponse.json({ message: "Error In Create Ticket" })
        return NextResponse.json({ message: "created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
