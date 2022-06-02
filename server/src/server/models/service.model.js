import mongoose from "mongoose";
import { toJson, paginate } from "./plugins/index.js";

const { Schema } = mongoose


const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["Laboratory", "Radiology", "Wellness", "COVID"],
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

serviceSchema.plugin(toJson)
serviceSchema.plugin(paginate)

// add index to name, description, price, duration
serviceSchema.index({ name: 'text', description: 'text', price: 'text', duration: 'text' })

const Service = mongoose.model('Service', serviceSchema)

export default Service