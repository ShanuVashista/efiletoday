import mongoose, { Schema } from "mongoose";

const FileReturnSchema = new Schema({

  lossEvent: {
    type: String,
    required: true,
  },
  taxVehicle: {
    type: {
      type: String,
      required: true
    },
    month: {
      type: Date,
      required: true,
    }
  },
  vin: {
    type: String,
    required: true
  },
  solddOn: {
    type: Date,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const model = mongoose.models.EfileReturn || mongoose.model("EfileReturn", FileReturnSchema);
export default model;