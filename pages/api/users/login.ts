import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;
    await dbConnect();

    switch (method) {
        case "POST":
            try {
                const user = await User.find({ "email": req.body.email });
                if (user.length == 0) {
                    res.status(404).json({
                        success: false,
                        data: "Credential Not Found"
                    });
                } else {
                    if (user[0].password != req.body.password) {
                        res.status(400).json({
                            success: false,
                            data: "Wrong Credential"
                        });
                    } else {
                        let token = jwt.sign({
                            data: user
                        }, 'efiletoday-key', { expiresIn: '1d' });
                        res.status(200).json({
                            success: true,
                            accesstoken: token,
                            data: {
                                "_id":user[0]._id,
                                "name":user[0].name,
                                "email":user[0].email
                            }
                        });
                    }
                }
            } catch (error) {
                res.status(400).json({ success: false });
            }

            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
