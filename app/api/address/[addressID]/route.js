import connectToMongo from "@/configs/db"
import { isLogin } from "@/middlewares/isLogin";
import { NextResponse } from "next/server";
import addressModel from '@/models/address';

export const DELETE = async (_, { params: { addressID } }) => {

    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return NextResponse.json({ message: 'unAuth' }, { status: 500 });
        const address = await addressModel.findOneAndDelete({ _id: addressID, userID: isLoginUser._id });
        if (!address) return NextResponse.json({ message: 'error to remove address' }, { status: 500 });
        return NextResponse.json({ message: 'deleted' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export const PUT = async (req, { params: { addressID } }) => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin()
        if (!isLoginUser) return NextResponse.json({ message: "unAuth" }, { status: 500 });
        const { fullAddress, reciver, name, phone } = await req.json();
        const address = await addressModel.findOneAndUpdate({ _id: addressID, userID: isLoginUser._id }, { fullAddress, reciver, name, phone });
        if (!address) return NextResponse.json({ message: "error to edit address" }, { status: 500 });
        return NextResponse.json({ message: 'edited' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
