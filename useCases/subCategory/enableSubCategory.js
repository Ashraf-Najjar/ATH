import SubCategory from "../../models/subCategory.js";

export const enableSubCategory = async (args) => {
    const subCategoryDB = await SubCategory.updateOne({_id: args.id}, {enabled: true}).catch(err => console.log(err));
    console.log(subCategoryDB)
    return "Eabled succefully"
}