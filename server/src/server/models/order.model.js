import mongoose from "mongoose";
import { toJson, paginate } from "./plugins/index.js";

const { Schema } = mongoose;

const generateOrderNumber = () => {
  const prefix = "SD-ORD";
  const number = new Date().getTime();
  return (
    prefix + number.toString().slice(number.toString().length - 7) * Math.ceil(Math.random() * 2)
  );
};

const orderSchema = new Schema(
  {
    orderNumber: {
      type: String,
      default: () => generateOrderNumber(),
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
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
      },
    ],
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

const Order = mongoose.model("Order", orderSchema);

export default Order;
