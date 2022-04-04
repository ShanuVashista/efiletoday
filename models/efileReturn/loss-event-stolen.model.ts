import mongoose from "mongoose";
import DateTimeFormat = Intl.DateTimeFormat;



const lossEventStolen = new mongoose.Schema({
    vin:{
        type:String,
        required:true
    },
    taxPaidDate:{
        type:{
            type:String,
            required:true
        },
        month:{
            type:Date,
            required:true,
            min:"1999-01-01",
            max:"2020-01-01"
        },
    },
    stolenOn :{
        type:Date,
        required:true

    },
    taxableGrossWeight :{
            type:String,
            required:true

    },
    usedForLogging:{
        type:Boolean,

    },
    explanation:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    }


})

const model = mongoose.models.lossEventStolen || mongoose.model("loss-event-stolen", lossEventStolen);
export default model;