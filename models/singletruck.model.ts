import mongoose from "mongoose";

const SingleTruckSchema = new mongoose.Schema({
    selectBusiness: {
        type: String,
        required: true
    },
    taxPeriod: {
        type: String,
        required: true
    },
    firstUsedMonth: {
        type: String,
        required: true
    },
    vehicleType: {
        type: Number,
        enum: [0, 1],
        default: 0,
    },
    finalReturn: {
        type: Number,
        enum: [0, 1],
        default: 0,
    },
    vin: {
        type: String,
        required: true
    },
    taxAmmount: {
        type: Number,
        required: true
    },
    grossWeight: {
        type: String,
        required: true
    },
    logging: {
        type: Boolean,
        default:false
    },
},{timestamps: true});

const model = mongoose.models.SingleTruck || mongoose.model("SingleTruck", SingleTruckSchema);
export default model;