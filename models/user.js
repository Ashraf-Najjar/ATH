import mongoose from "mongoose";
const Schema = mongoose.Schema;

import {addressSchema} from "../shared/models/address.js";

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: String,
    // managers: managersSchema,
    address: addressSchema,
    // role: {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: "Role", 
    //     required: true 
    // },
    enabled: {
        type: Boolean,
        default: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
    createdAt: Date,
    lastUpdate: Date,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }
});


export default mongoose.model('User', userSchema);
