import mongoose from "mongoose";
import { toJson, paginate } from "./plugins/index.js";

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
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
      required: true,
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