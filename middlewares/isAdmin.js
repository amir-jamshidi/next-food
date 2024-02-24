import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import userModel from "@/models/user";
import connectToMongo from "@/configs/db";

export const isAdmin = async () => {
    connectToMongo();
    if (cookies().get("token")) {
        const { value: token } = cookies().get("token");
        try {
            const { id } = jwt.verify(token, process.env.JWT);
            const user = await userModel.findOne({ _id: id });
            if (user.role === 'ADMIN') {
                return user;
            }
            return false
        } catch (error) {
            return false
        }
    }
}