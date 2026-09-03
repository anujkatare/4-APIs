import mongoose from "mongoose";
import { timeStamp } from "node:console";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        category: {
            type: String,
            required: true,
            enum: ['textile', 'electronic', 'books', 'other'],
        },
        inStock: {
            type: Boolean,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Product = mongoose.model('Product', productSchema);