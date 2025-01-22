import Product from "../../models/product.js";

export const disableProduct = async (args) => {
    const productDB = await Product.updateOne({_id: args.id}, {enabled: false}).catch(err => console.log(err));
    return "Disabled succefully"
}