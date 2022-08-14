import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";
import validator from "validator";
import { toJson, paginate } from "./plugins/index.js";

const { Schema } = mongoose;




const AppointmentSchema = new Schema(
  {
    appNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
      autopopulate: true
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      autopopulate: true
    },
    comment: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
      minlength: [10, "Phone number must be at least 10 characters long"],
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

AppointmentSchema.index({ date: 1, time: 1 });
AppointmentSchema.index({ date: 1, doctor: 1 });
AppointmentSchema.index({ date: 1, patient: 1 });
AppointmentSchema.plugin(toJson);
AppointmentSchema.plugin(paginate);
AppointmentSchema.plugin(mongooseAutoPopulate);

const Appointment = mongoose.model("Appointment", AppointmentSchema);
export default Appointment;
