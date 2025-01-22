import Product from "../../models/product.js";

export const enableProduct = async (args) => {
    const productDB = await Product.updateOne({_id: args.id}, {enabled: true}).catch(err => console.log(err));
    return "Eabled succefully"
}