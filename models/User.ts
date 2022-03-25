import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String
});

const model = mongoose.models.User || mongoose.model("User", UserSchema);
export default model;
