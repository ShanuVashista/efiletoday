import dbConnect from "../../../lib/dbConnect";
import mongoose from "mongoose"
import lossEventStolen from "../../../models/efileReturn/loss-event-stolen.model";
import type {NextApiRequest, NextApiResponse} from "next";
import Business from "../../../models/Business.model";
import TaxRefund from "../../../models/TaxRefund";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    const {method} = req;
    await dbConnect();

    switch(method){


        case "GET":

            try{
                const lossEventstolen = await lossEventStolen.find({});

                res.status(200).json({
                    success: true,
                    data: lossEventstolen
                });
            }catch(err){
                res.status(400).json({success: false});
            }

            break;


            
        case "POST":

            try {
                const newLossEventStolen = await lossEventStolen.create(req.body);

                res.status(201).json({
                    success: true,
                    data: newLossEventStolen
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

        case "PUT":
            try{
                const _id= req.body._id;
                const newlossEventstolen = await lossEventStolen.findByIdAndUpdate(_id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!newlossEventstolen){
                    return res.status(400).json({success: false});
                }

                res.status(200).json({
                    success: true,
                    data: newlossEventstolen
                });
            }catch (error: unknown){
                if (error instanceof mongoose.Error.ValidationError){
                    res.status(400).json({
                        success: false,
                        message: error.message
                    });

                    return;
                }
            }

            break;
        case "DELETE":
            try{
                const _id= req.body._id;
                const deletelossEventstolen = await lossEventStolen.deleteOne({_id: _id});

                if(!deletelossEventstolen){
                    return res.status(400).json({success: false});
                }

                res.status(200).json({
                    success: true,
                    data: deletelossEventstolen,
                    message: "Deleted Successful"
                });
            }catch(err){
                return res.status(400).json({success: false});
            }
            break;

            
        default:
            res.status(400).json({success: false});
            break;
    }
}