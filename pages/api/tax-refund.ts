import dbConnect from "../../lib/dbConnect";
import mongoose from "mongoose";
import TaxRefund from "../../models/TaxRefund";
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
                const taxRefunddetails = await TaxRefund.find();

                res.status(200).json({
                    success: true,
                    data: taxRefunddetails
                });
            } catch (error){
                res.status(400).json({success: false});
            }

            break;
        case "POST":
            try {
                const taxRefund = await TaxRefund.create(req.body);

                res.status(201).json({
                    success: true,
                    data: taxRefund
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
