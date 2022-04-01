import mongoose from "mongoose";
import crypto from "crypto";
import User from "../../models/User";
import type {NextApiRequest, NextApiResponse} from "next";
import dbConnect from "../../lib/dbConnect";
import {addHours} from "date-fns";
import sendMail from "../../lib/nodemailer";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    const {method} = req;
    await dbConnect();

    switch (method){
        case "POST":
            try {
                if(!req.body.email){
                    res.status(400).json({
                        success: false,
                        message: "Email is required"
                    });

                    return;
                }

                const user = await User.findOne({email: req.body.email});
                
                if (!user){
                    res.status(400).json({
                        success: false,
                        message: "User not found"
                    });

                    return;
                }

                user.resetPasswordToken = crypto.randomInt(100000, 999999).toString();
                user.resetPasswordExpires = addHours(new Date(), 1);
                console.log(user.resetPasswordToken, user.resetPasswordExpires);
                await user.save({validateBeforeSave: false});
                console.log("after save");

                await sendMail({
                    to: user.email, // list of receivers
                    subject: "Forgot Password OTP", // Subject line
                    text: `Your OTP is ${user.resetPasswordToken}`, // plain text body
                    html: `
                        <p>Your OTP is ${user.resetPasswordToken}</p>
                    `, // html body
                });
                
                res.status(200).json({
                    success: true,
                    message: "Reset password link has been sent to your email",
                    user
                });

                return;
            } catch (error: unknown){
                console.log(error);

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
            res.status(400).json({successads: false});
            break;
    }
}
