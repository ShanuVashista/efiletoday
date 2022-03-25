import mongoose from "mongoose";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import type {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    // if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");
    const {method} = req;
    await dbConnect();

    switch (method){
        case "POST":
            try {
                const user = await User.create(req.body);
                const token = jwt.sign({_id: user[0]._id}, "efiletoday-key", {expiresIn: "1d"});

                res.status(201).json({
                    success: true,
                    accesstoken: token,
                    data: user
                });
            } catch (error: unknown){
                if (error instanceof mongoose.Error.ValidationError){
                    res.status(400).json({
                        success: false,
                        message: error.message
                    });

                    return;
                }

                res.status(400).json({success: false});
            }

            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}
