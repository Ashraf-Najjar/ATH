import express from "express";

import cartUseCases from "../../../useCases/cart/index.js";

export const cartRoutes = express.Router();

cartRoutes.post("/add", async (req, res) => {
    let error;
    const cart = await cartUseCases.addToCart(req.body).catch(err => error = err);
    if(error){
        return res.status(500).json({ message: error?.message || "Error adding to cart"});
    }
    return res.status(200).json({ message: "Item added to cart", cart });
});


cartRoutes.get("/:clientId", async (req, res) => {
    let error;
    const cart = await cartUseCases.getCart({...req.params, populate: true}).catch(err => error = err);
    if(error){
        return res.status(404).json({ message: error?.message || "Cart not found" });
    }
    return res.status(200).json(cart);
});