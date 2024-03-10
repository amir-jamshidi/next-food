import connectToMongo from "@/configs/db"
import { NextResponse } from "next/server"
import favoriteModel from '@/models/favorite';
import { isLogin } from "@/middlewares/isLogin";

export const POST = async (req, { params: { mealID } }) => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return NextResponse.json({ message: "UnAuth" }, { status: 500 });
        const favorite = await favoriteModel.create({ userID: isLoginUser._id, mealID })
        if (!favorite) return NextResponse.json({ message: 'error to create favorite' }, { status: 500 });
        return NextResponse.json({ message: 'created' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export const DELETE = async (req, { params: { mealID } }) => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return NextResponse.json({ message: "UnAuth" }, { status: 500 });
        const favorite = await favoriteModel.findOneAndDelete({ userID: isLoginUser._id, mealID })
        if (!favorite) return NextResponse.json({ message: 'error to create favorite' }, { status: 500 });
        return NextResponse.json({ message: 'deleted' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}