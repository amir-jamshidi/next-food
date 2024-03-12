import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const POST = async () => {
    try {
        cookies().delete('token')
        return NextResponse.json({ message: 'done' });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}