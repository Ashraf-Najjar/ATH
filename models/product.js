import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { addressSchema } from '../shared/models/address.js';
import { fileSchema } from '../shared/models/file.js';

const productSchema = new Schema({
    name: { type: String, required: true }, // Ensure quantity is required,
    description: String,
    note: String,
    quantity: { type: Number, required: true }, // Ensure quantity is required,
    price: { type: Number, required: true }, // Ensure quantity is required,
    address: [addressSchema],
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Category"
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "SubCategory"
    },
    image: fileSchema,
    createdAt: Date,
    lastUpdate: Date,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    },
    enabled: {
        type: Boolean,
        default: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model('Product', productSchema);