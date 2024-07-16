'use server'
import connectToMongo from "@/configs/db"
import userModel from '@/models/user';
import preUserModel from '@/models/preUse'
import { codeSchema, phoneSchema } from "./validations"
import codeGnerator from "@/utils/codeGnerator";
import verifyTimeGnerator from "@/utils/vrifyTimeGnerator";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
import request from "request";



export const preUserHandler = async (_prevState, formData) => {

    //Connect To DB
    connectToMongo();

    //Validate Form
    const validation = phoneSchema.safeParse({
        phone: formData.get('phone')
    })

    // Cherck Errors
    if (validation.error) {
        return {
            isSuccess: false,
            errors: validation.error.errors
        };
    }

    // Delete Before Data 
    await preUserModel.findOneAndDelete({ phone: formData.get('phone') });

    // Create PreUser
    const code = codeGnerator();

    request.post(
        {
            url: "http://ippanel.com/api/select",
            body: {
                op: "pattern",
                user: "u09928168447",
                pass: "Faraz@1402546340042007",
                fromNum: "3000505",
                toNum: formData.get('phone'),
                patternCode: "k2kt41x59fj09b3",
                inputData: [{ "verification-code": code }],
            },
            json: true,
        }
    );

    const expire = verifyTimeGnerator(5);
    await preUserModel.create({ phone: formData.get('phone'), code, expire });
    if (!preUserModel) {
        return {
            isSuccess: false,
            errors: []
        }
    }
    // Return Success
    return {
        isSuccess: true,
        phone: formData.get('phone'),
        errors: []
    }
}
export const loginUserHandler = async (_prevState, formData) => {
    // Connect To DB
    connectToMongo();

    // Valodation
    const validation = codeSchema.safeParse({
        code: formData.get('code')
    })

    // Cherck Errors
    if (validation.error) {
        return {
            isSuccess: false,
            errors: validation.error.errors
        };
    }

    const phone = formData.get('phone');
    const code = formData.get('code');

    const isLogin = await preUserModel.findOne({ code, phone });

    // Check True Validation
    if (!isLogin) {
        return {
            code: 2,
            errors: []
        }
    }

    // Check Expire Time
    if (Number(isLogin.expire) < Date.now()) {
        return {
            code: 3,
            errors: []
        }
    }

    // Create Token
    const user = await userModel.findOne({ phone }) || await userModel.create({ phone });
    const token = jwt.sign({ id: user._id }, process.env.JWT, { expiresIn: '10day' })
    cookies().set({
        name: 'token',
        value: token,
        httpOnly: true,
        expires: Date.now() + (24 * 60 * 60 * 1000) * 10,
        path: '/'
    })
    return {
        code: 1,
        errors: []
    }
}
