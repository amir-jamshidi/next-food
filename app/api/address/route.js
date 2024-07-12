

import connectToMongo from "@/configs/db"
import { isLogin } from "@/middlewares/isLogin";
import { NextResponse } from "next/server";
import addressModel from '@/models/address';


export const POST = async (req) => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return NextResponse.json({ message: 'unAuth' }, { status: 500 });
        const { fullAddress, name, reciver, phone, position = [] } = await req.json();
        let lat;
        let lng;
        if (position?.length > 0) {
            lat = position[0];
            lng = position[1];
        }
        const address = await addressModel.create({ userID: isLoginUser._id, fullAddress, name, reciver, phone, lat, lng });
        if (!address) return NextResponse.json({ message: 'error to add address' }, { status: 500 });
        return NextResponse.json({ message: "created" }, { status: 201 })
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
