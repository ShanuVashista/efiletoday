import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import type {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    const {method} = req;
    await dbConnect();

    switch (method){
        case "POST":
            try {
                const user = await User.create(req.body);
                let token = jwt.sign({
                    data: user
                  }, 'efiletoday-key', { expiresIn: '1d' });
                  
                res.status(201).json({
                    success: true,
                    accesstoken:token,
                    data: user
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
