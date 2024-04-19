import { NextRequest, NextResponse } from "next/server";
export async function GET(request){
    const requestUrl = request.url;
    return NextResponse.json({ message: "Hello World!", request: requestUrl });
}