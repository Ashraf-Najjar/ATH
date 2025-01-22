import Product from "../../models/product.js";

export const updateProduct = async (args) => {
    const productDB = await Product.findById(args.id).catch(err => console.log(err));
    if(!productDB) return "Product not exists";
    const lastUpdate = new Date();
    const updated = await Product.updateOne({_id: productDB._id}, {$set: {...args.product, lastUpdate}});
    return "Update succefully"
}