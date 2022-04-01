import mongoose, {Schema} from "mongoose";

const ActivitySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    requestIp: {
        type: String,
        required: true
    },
    requestMethod: {
        type: String,
        required: true
    },
    requestUrl: {
        type: String,
        required: true
    },
    requestBody: {
        type: String,
        required: true
    },
    responseBody: {
        type: String,
        required: true
    },
    responseStatus: {
        type: String,
        required: true
    }
}, {timestamps: true});

const model = mongoose.models.Activity || mongoose.model("Activity", ActivitySchema);
export default model;