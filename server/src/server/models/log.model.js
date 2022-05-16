import mongoose from "mongoose";
import { toJson, paginate } from "./plugins/index.js";

const Schema = mongoose.Schema;

const engagementLogSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    next_visit_14_days: {
      type: Date,
      default: () => {
        return new Date(new Date().setDate(new Date().getDate() + 14));
      },
    },
    next_visit_90_days: {
      type: Date,
      // default is 90 days from the time of creation
      default: () => {
        return new Date(new Date().setDate(new Date().getDate() + 90));
      },
    },
    comments: {
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
