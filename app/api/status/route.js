import connectToMongo from "@/configs/db"
import { isAdmin } from "@/middlewares/isAdmin";
import orderStatusModel from "@/models/orderStatus";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        connectToMongo();
        const isAdminUser = await isAdmin();
        // if (!isAdminUser) return NextResponse.json({ message: "UnAth" }, { status: 500 })
        
        const { name, type, code } = await req.json()
        const status = await orderStatusModel.create({ name, code, type })
        if (status) {
            return NextResponse.json({ message: "created" }, { status: 201 })
        }
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })

    }
}