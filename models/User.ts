import mongoose from "mongoose";
import bcrypt from "bcrypt";
import IsEmail from "isemail";

const UserSchema = new mongoose.Schema({
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
        unique: true,
        validate: {
            validator: (email: string) => IsEmail.validate(email),
            message: "Email is not valid"
        }
    },
    phone: {
        type: String,
        required: true,
        maxlength: 20,
        validate: {
            validator: (phone: string) => {
                return /^\d{10}$/.test(phone);
            },
            message: "Phone is not valid"
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100,
        validate: {
            validator: function (password: string){
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                return passwordRegex.test(String(password));
            },
            message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        }
    },
    resetPasswordToken: {type: String},
    resetPasswordExpires: {type: Date}
});

UserSchema.methods.toJSON = function (){
    const user = this.toObject();
    delete user.password;
    return user;
};

UserSchema.pre("save", async function (next){
    if (this.isModified("password")){
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }

    next();
});

const model = mongoose.models.User || mongoose.model("User", UserSchema);
export default model;
