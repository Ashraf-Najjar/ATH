import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const addressSchema = new Schema({
    country: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    point: {
        type: String,
        required: true
    },
})