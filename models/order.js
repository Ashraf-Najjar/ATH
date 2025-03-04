import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const orderSchema = new Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
