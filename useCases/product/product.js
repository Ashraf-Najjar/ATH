import Product from "../../models/product.js";

export const product = async (args) => {
    return await Product.findOne({_id: args.id}).catch(err => console.log(err));
}