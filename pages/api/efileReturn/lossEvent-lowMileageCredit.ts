import dbConnect from "../../../lib/dbConnect";
import mongoose from "mongoose"
import lossEventLowMileageCredit from "../../../models/efileReturn/loss-event-lowMileageCredit.model";
import type {NextApiRequest, NextApiResponse} from "next";
// import Business from "../../../models/Business.model";
// import TaxRefund from "../../../models/TaxRefund";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    const {method} = req;
    await dbConnect();

    switch(method){


        case "GET":

            try{
                const lossEventlowMileageCredit = await lossEventLowMileageCredit.find({});

                res.status(200).json({
                    success: true,
                    data: lossEventlowMileageCredit
                });
            }catch(err){
                res.status(400).json({success: false});
            }

            break;



        case "POST":

            try {
                const newLossEventlowMileageCredit = await lossEventLowMileageCredit.create(req.body);

                res.status(201).json({
                    success: true,
                    data: newLossEventlowMileageCredit
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
                const newlossEventlowMileageCredit = await lossEventLowMileageCredit.findByIdAndUpdate(_id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!newlossEventlowMileageCredit){
                    return res.status(400).json({success: false});
                }

                res.status(200).json({
                    success: true,
                    data: newlossEventlowMileageCredit
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
                const deletelossEventlowMileageCredit = await lossEventLowMileageCredit.deleteOne({_id: _id});

                if(!deletelossEventlowMileageCredit){
                    return res.status(400).json({success: false});
                }

                res.status(200).json({
                    success: true,
                    data: deletelossEventlowMileageCredit,
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