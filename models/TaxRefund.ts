import mongoose from "mongoose";

const TaxRefundSchema = new mongoose.Schema({
    vin: {
        type: String,
        required: true
    },
    paidAmount: {
        type: Number,
        required: true
    },
    paymentOption: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    taxableGrossWeight: {
        type: String,
        required: true
    },
    taxYear: {
        type: String,
        required: true
    },
    firstUsedMonth: {
        type: String,
        required: true
    },
    taxAmount: {type: Number},
    usedForLogin: {type: Boolean},
    overPaymentOfTax: {
        type: Number,
        required: true
    },
    irs: {
        type: String,
        required: true
    },
    claimFile: {
        type: String,
        required: true
    },
});

const model = mongoose.models.TaxRefund || mongoose.model("TaxRefund", TaxRefundSchema);
export default model;
