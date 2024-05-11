import Category from "../../models/category.js";

export const category = async (args) => {
    return await Category.findOne({_id: args.id}).catch(err => console.log(err));
}