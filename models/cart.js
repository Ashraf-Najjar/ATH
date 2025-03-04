import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});

const cartSchema = new Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [cartItemSchema],
    createdAt: { type: Date, default: Date.now },
    lastUpdate: { type: Date, default: Date.now }
});

export default mongoose.model('Cart', cartSchema);
