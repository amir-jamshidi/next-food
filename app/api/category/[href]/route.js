import { NextResponse } from "next/server"
import mealModel from '@/models/meal'
import categoryModel from '@/models/category'
import connectToMongo from "@/configs/db";
export const GET = async (req, { params: { href } }) => {
    try {
        connectToMongo();
        const { _id } = await categoryModel.findOne({ href: `/${href}` }).lean();
        const meals = await mealModel.find({ categoryID: _id }).lean();
        return NextResponse.json(meals);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "error" }, { status: 500 });
    }
}