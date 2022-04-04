import mongoose from "mongoose";
import DateTimeFormat = Intl.DateTimeFormat;



const lossEventLowMileageCredit = new mongoose.Schema({
    vin:{
        type:String,
        required:true
    },
    taxPaidDate:{
        monthRange:{
            type:String,
            required:true
        },
        select:{
            type:String,
            required:true,

        },
    },

    taxableGrossWeight :{
        type:String,
        required:true

    },
    usedForLogging:{
        type:Boolean,

    },

    file:{
        type:String,
        required:true
    }


})

const model = mongoose.models.lossEventLowMileageCredit || mongoose.model("loss-event-lowMileageCredit", lossEventLowMileageCredit);
export default model;