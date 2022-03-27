import dbConnect from "../../../lib/dbConnect";
import Business from "../../../models/Business.model";
import type {NextApiRequest, NextApiResponse} from "next";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    const {
        query: {id},
        method
    } = req;
    
    dbConnect();

    switch(method){
        case "GET":
            try{
                const business = await Business.findById(id);
                
                if(!business){
                    return res.status(400).json({success: false});
                }

                res.status(200).json({
                    success: true,
                    data: business
                });
            }catch(err){
                return res.status(400).json({success: false});
            }

            break;

        case "PUT":
            try{
                const business = await Business.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!business){
                    return res.status(400).json({success: false});
                }

                res.status(200).json({
                    success: true,
                    data: business
                });
            }catch(err){
                return res.status(400).json({success: false});
            }

            break;
        case "DELETE":
            try{
                const deleteBusiness = await Business.deleteOne({_id: id});

                if(!deleteBusiness){
                    return res.status(400).json({success: false});
                }

                res.status(200).json({
                    success: true,
                    data: {},
                    message: "Deleted Successful"
                });
            }catch(err){
                return res.status(400).json({success: false});
            }

            break;

        default:{
            res.status(400).json({success: false});
        }
    }
}