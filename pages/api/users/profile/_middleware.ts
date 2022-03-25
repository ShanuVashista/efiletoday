import {NextRequest, NextResponse} from "next/server";
import jwt from "jsonwebtoken";

export async function middleware (req: NextRequest){
    try {
        const response = NextResponse.next();
        let token = req["headers"].get("authorization");

        if(
            typeof token != "undefined" &&
            token != null
        ){
            const barerheader = token;
            const baerer = barerheader.split(" ");
            token = baerer[1];
        }

        if (token){
            const token_details = await jwt.verify(token, "efiletoday-key");

            if (!token_details){
                throw new Error("Authentication failed");
            } else {
                return response;
            }
        } else {
            throw new Error("Authentication token required");
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any){
        return new Response(error.message, {status: 401});
    }
}