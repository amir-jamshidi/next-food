import connectToMongo from "@/configs/db"
import { isAdmin } from "@/middlewares/isAdmin";
import stateModel from "@/models/state";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        connectToMongo();
        const isAdminUser = await isAdmin();
        // if (!isAdminUser) return NextResponse.json({ message: "UnAth" }, { status: 500 })

        const { name, state, code } = await req.json()
        const status = await stateModel.create({ name, code, state })
        if (status) {
            return NextResponse.json({ message: "created" }, { status: 201 })
        }
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })

    }
}