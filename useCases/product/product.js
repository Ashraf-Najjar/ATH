import Product from "../../models/product.js";

export const product = async (args) => {
    let query = Product.findOne({_id: args.id});
    if (args.populate) {
        query = query.populate(["category", "subCategory"]);
    }
    return await query.exec().catch(err => console.log(err));
}