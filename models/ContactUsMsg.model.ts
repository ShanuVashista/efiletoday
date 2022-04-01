import mongoose from "mongoose";
import {Schema}from "mongoose";
import IsEmail from "isemail";

const ContactUsSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 100
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (email: string) => IsEmail.validate(email),
            message: "Email is not Valid"
        }
    },
    phone: {
        type: String,
        minlength: 8,
        maxlength: 20,
        validate: {
            validator: (phone: string) => {
                return /^\d{10}$/.test(phone);
            },
            message: "Phone is not valid"
        }
    },
    message: {
        type: String,
        required: true,
        maxlength: [1000, "Type your query to us"]
    }
}, {timestamps: true});

ContactUsSchema.methods.toJSON = function (){
    const ContactUs = this.toObject();
    return ContactUs;
};

const ContactUs = mongoose.models.ContactUs || mongoose.model("ContactUs", ContactUsSchema);
export default ContactUs;
