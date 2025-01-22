import Product from "../../models/product.js";

export const deleteProduct = async (args) => {
    const productDB = await Product.updateOne({_id: args.id}, {deleted: true}).catch(err => console.log(err));
    return "Deleted succefully"
}