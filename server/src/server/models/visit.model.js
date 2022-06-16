import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";
import { toJson, paginate } from "./plugins/index.js";

const { Schema } = mongoose;

const visitSchema = new Schema(
  {
    visitNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      autopopulate: true
    },
    location: {
      type: String,
      required: true,
    },
    next_visit_14_days: {
      type: Date,
      required: true,
    },
    next_visit_90_days: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    consultation_results: {
      type: String,
      required: true,
    },
    medication: {
      type: String,
      required: true,
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

visitSchema.plugin(toJson);
visitSchema.plugin(paginate);
visitSchema.plugin(mongooseAutoPopulate)

// add index to searchable fields
visitSchema.index({
  visitNumber: "text",
  date: "text",
  location: "text",
  address: "text",
  consultation_results: "text",
  medication: "text",
  comments: "text",
});

const Visit = mongoose.model("Visit", visitSchema);

export default Visit;
