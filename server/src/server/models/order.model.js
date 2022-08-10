import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";
import { toJson, paginate } from "./plugins/index.js";

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    orderNumber: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      autopopulate: true,
    },
    orderDate: {
      type: Date,
      required: true,
    },
    orderStatus: {
      type: String,
      default: "pending",
      enum: ["pending", "approved", "rejected", "delivered"],
    },
    orderItems: [
      {
        itemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Service",
          required: true,
        },
        itemQuantity: {
          type: Number,
          required: true,
        },
        itemName: {
          type: String,
          required: true,
        },
        itemPrice: {
          type: String,
          required: true,
        },
      },
    ],
    homeService: {
      type: Boolean,
      required: true,
      default: false,
    },
    orderTotal: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

orderSchema.plugin(toJson);
orderSchema.plugin(paginate);
orderSchema.plugin(mongooseAutoPopulate);

const Order = mongoose.model("Order", orderSchema);

export default Order;
