
import type {NextApiRequest, NextApiResponse} from "next";
import dbConnect from "../../lib/dbConnect";
import ContactUs from "../../models/ContactUsMsg.model";

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
                const ContactUsMsg = await ContactUs.find({});

                res.status(200).json({
                    success: true,
                    data: ContactUsMsg,
                    message: "Data fetched from mongodb"
                });
            } catch (error){
                res.status(400).json({success: false});
            }

            break;
        case "POST":
            try {
                const contactUsMsg = await ContactUs.create(req.body);

                res.status(201).json({
                    success: true,
                    data: contactUsMsg
                });
            } catch (error){
                res.status(400).json({success: false});
            }

            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}