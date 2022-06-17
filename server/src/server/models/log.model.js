import mongoose from "mongoose";
import mongooseAutoPopulate  from "mongoose-autopopulate"
import { toJson, paginate } from "./plugins/index.js";

const Schema = mongoose.Schema;

const engagementLogSchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      autopopulate: true
    },
    engagementDate: {
      type: Date,
      required: true,
    },
    engagementType: {
      type: String,
      required: true,
      enum: ["email", "phone"],
    },
    activity: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
    initiationDirection: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

engagementLogSchema.plugin(toJson);
engagementLogSchema.plugin(paginate);
engagementLogSchema.plugin(mongooseAutoPopulate)

const EngagementLog = mongoose.model("EngagementLog", engagementLogSchema);

export default EngagementLog;
