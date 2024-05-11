import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const managersSchema = new Schema({
    country: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    region: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    point: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    branch: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    }
})