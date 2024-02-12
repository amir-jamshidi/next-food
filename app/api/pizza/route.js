import connectToMongo from "@/configs/db";
import pizzaModel from '@/models/pizza'
import { isAdmin } from "@/middlewares/isAdmin"
import { NextResponse } from "next/server";

export const POST = async (req) => {

    try {
        // const isAdminUser = await isAdmin();
        connectToMongo();
        const { name, description, href, inventory, sellerID, categoryID, sizes } = await req.json();
        const pizza = await pizzaModel.create({ name, description, href, inventory, sellerID, categoryID, sizes })
        return NextResponse.json(pizza);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

}