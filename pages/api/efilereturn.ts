import type {NextApiRequest, NextApiResponse} from "next";
import dbConnect from "../../lib/dbConnect";
import Ereturn from "../../models/EfileReturn.model";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    const {method} = req;
    await dbConnect();

    switch (method){
        case "POST": 
            try {
                const contactUsMsg = await Ereturn.create(req.body);

                res.status(201).json({
                    success: true,
                    data: contactUsMsg
                });
            } catch (error:any){
                res.status(400).json({
                    success: false,
                    message: error.message
                });
            }

            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}