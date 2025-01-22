import Product from "../../models/product.js";

export const createProduct = async (args) => {
    const product = new Product(args.product);
    const date = new Date();
    product.createdAt = date;
    product.lastUpdate = date;
    await product.save().catch(err => console.log(err));
    return product;
}