import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String,
    note: String,
    description: String,
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


export default mongoose.model('Category', categorySchema);