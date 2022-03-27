import mongoose, {Schema} from "mongoose";

const BusinessAddressSchema = new Schema({
    addline1: {
        type: String,
        required: true,
        minlength: 8
    },
    addline2: {type: String},
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true
    }
});

const SigningAutheritySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }

});

const PointOfContactSchema = new Schema ({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    }
});

const BusinessSchema = new Schema({
   
    businessName: {
        type: String,
        required: true,
        maxlength: 100
    },
    nameControl: {type: String},
    einNo: {
        type: String,
        required: true,
    },
    businessType: {
        type: String,
        required: true,
    },
    businessAdd: BusinessAddressSchema,
    signingAuth: SigningAutheritySchema,
    pointOfContact: PointOfContactSchema,
    businessPhone: {type: String},
}, {timestamps: true});

const model = mongoose.models.Business || mongoose.model("Business", BusinessSchema);
export default model;