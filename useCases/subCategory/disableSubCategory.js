import SubCategory from "../../models/subCategory.js";

export const disableSubCategory = async (args) => {
    const subCategoryDB = await SubCategory.updateOne({_id: args.id}, {enabled: false}).catch(err => console.log(err));
    return "Disabled succefully"
}