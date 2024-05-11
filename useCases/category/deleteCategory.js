import Category from "../../models/category.js";

export const deleteCategory = async (args) => {
    const categoryDB = await Category.updateOne({_id: args.id}, {deleted: true}).catch(err => console.log(err));
    return "Deleted succefully"
}