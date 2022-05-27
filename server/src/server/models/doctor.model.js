import mongoose from "mongoose";
import validator from "validator";
import { toJson, paginate } from "./plugins/index.js";

const { Schema } = mongoose;

const doctorSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    phone_number: {
      type: String,
      required: true,
      max: 10,
      trim: true,
    },
    specialities: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
doctorSchema.plugin(toJson);
doctorSchema.plugin(paginate);

// add indexes
doctorSchema.index({ name: 1 });
doctorSchema.index({ email: 1 });
doctorSchema.index({ specialities: 1 });
doctorSchema.index({ phone_number: 1 });

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
