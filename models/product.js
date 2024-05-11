const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import { addressSchema } from '../shared/models/address';

const productSchema = new Schema({
    name: String,
    description: String,
    note: String,
    quantity: Number,
    address: [addressSchema],
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Category"
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Category"
    },
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


module.exports = mongoose.model('Product', productSchema);