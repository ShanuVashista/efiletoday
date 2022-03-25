import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import type {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");
    const {method} = req;
    await dbConnect();

    switch (method){
        case "POST":
            try {
                const user = await User.find({email: req.body.email});

                if (user.length == 0){
                    res.status(404).json({
                        success: false,
                        data: "Credential Not Found"
                    });
                } else {                    
                    if(!bcrypt.compareSync(req.body.password, user[0].password)){
                        res.status(400).json({
                            success: false, 
                            data: "Wrong Credential"
                        });
                    } else {
                        const token = jwt.sign({_id: user[0]._id}, process.env.JWT_SECRET, {expiresIn: "1d"});
                                                
                        res.status(200).json({
                            success: true,
                            accesstoken: token,
                            data: {
                                _id: user[0]._id,
                                firstName: user[0].firstName,
                                lastName: user[0].lastName,
                                email: user[0].email,
                                phone: user[0].phone
                            }
                        });
                    }
                }
            } catch (error){
                res.status(400).json({success: false});
            }

            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}
