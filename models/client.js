import mongoose from "mongoose";
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    // address: addressSchema,
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


export default mongoose.model('Client', clientSchema);