import mongoose from "mongoose";
import { toJson, paginate } from "./plugins/index.js";

const Schema = mongoose.Schema;

const engagementLogSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    engagementDate: {
      type: Date,
      required: true,
    },
    engagementType: {
      type: String,
      required: true,
      enum: [],
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

const EngagementLog = mongoose.model("EngagementLog", engagementLogSchema);

export default EngagementLog;
