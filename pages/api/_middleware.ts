import dbConnect from "../../lib/dbConnect";
import {NextRequest, NextResponse} from "next/server";
import Activity  from "../../models/Activity";

export async function middleware (req: NextRequest,){
    try {
        dbConnect();
        const activity = await Activity.create({method: req.method});
        console.log(activity);
        console.log("middleware root");
        console.log(req);
        NextResponse.next();
    } catch (error: unknown){
        if (error instanceof Error){
            console.log(error);
            return new Response(error.message, {status: 401});
        }
    }
}