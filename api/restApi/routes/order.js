import express from "express";
import orderUseCases from "../../../useCases/order/index.js"

export const orderRoutes = express.Router();

orderRoutes.post("/buy", async (req, res) => {
    let error;
    const order = await orderUseCases.buyOrderUseCase(req.body).catch(err => error = err);
    if(error){
        return res.status(500).json({ message: "Error processing purchase", error });
    }
    return res.status(200).json({ message: "Purchase successful", order });
});

// Get order history for a client
orderRoutes.get("/list/:clientId", async (req, res) => {
    let error;
    const orders = await orderUseCases.ordersUseCase({...req.params, populate: true}).catch(err => error = err);
    if(error){
        return res.status(500).json({ message: error?.message || "Error fetching orders"});
    }
    res.status(200).json(orders);
});