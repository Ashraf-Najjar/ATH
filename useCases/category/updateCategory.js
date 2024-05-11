import Category from "../../models/category.js";

export const updateCategory = async (args) => {
    const categoryDB = await Category.findById(args.id).catch(err => console.log(err));
    if(!categoryDB) return "Category not exists";
    const updated = await Category.updateOne({_id: categoryDB._id}, {$set: args.category});
    return "Update succefully"
}