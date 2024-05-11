import Category from "../../models/category.js";

export const disableCategory = async (args) => {
    const categoryDB = await Category.updateOne({_id: args.id}, {enabled: false}).catch(err => console.log(err));
    console.log(categoryDB)
    return "Disabled succefully"
}