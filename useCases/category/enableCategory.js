import Category from "../../models/category.js";

export const enableCategory = async (args) => {
    const categoryDB = await Category.updateOne({_id: args.id}, {enabled: true}).catch(err => console.log(err));
    return "Eabled succefully"
}