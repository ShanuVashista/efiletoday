
import type {NextApiRequest, NextApiResponse} from "next";
import dbConnect from "../../lib/dbConnect";
import Purchase from "../../models/vehiclePurchaser.model";

export default async function handler (
    req:NextApiRequest,
    res:NextApiResponse
){
    const {method} = req;
    await dbConnect();
    // console.log("working");

    switch(method){
        case "GET":
            try {
                const purchase = await Purchase.find({});

                res.status(200).json({
                    success: true,
                    data: purchase,
                    message: "Data fetched from mongodb"
                });
            } catch (error){
                res.status(400).json({success: false});
            }

            break;
        case "POST":
            try {
                const purchase = await Purchase.create(req.body);

                res.status(201).json({
                    success: true,
                    data: purchase
                });
            } catch (error){
                res.status(400).json({success: false, message: error.message});
            }

            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}