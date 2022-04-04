import mongoose from "mongoose";

const VehiclePurchaserSchema = new mongoose.Schema({
    soldTo: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2:{
        type: String
    },
    country: {type: String},
    zipCode: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

const model = mongoose.models.VehiclePurchaser || mongoose.model("VehiclePurchaser", VehiclePurchaserSchema);
export default model;