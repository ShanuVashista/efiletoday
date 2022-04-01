import dbConnect from "../../lib/dbConnect";
import mongoose from "mongoose";
import SingleTruck from "../../models/singletruck.model";
import type {NextApiRequest, NextApiResponse} from "next";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    const {method} = req;
    await dbConnect();

    switch (method){
        case "GET":
            try {
                const singleTruck = await SingleTruck.find();

                res.status(200).json({
                    success: true,
                    data: singleTruck
                });
            } catch (error){
                res.status(400).json({success: false});
            }

            break;
        case "POST":
            try {
                const singleTruck = await SingleTruck.create(req.body);

                res.status(201).json({
                    success: true,
                    data: singleTruck
                });
            } catch (error: unknown){
                if (error instanceof mongoose.Error.ValidationError){
                    res.status(400).json({
                        success: false,
                        message: error.message
                    });

                    return;
                }
            }

            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}