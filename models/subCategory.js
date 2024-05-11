import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
    name: String,
    description: String,
    category: {
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


export default mongoose.model('SubCategory', subCategorySchema);