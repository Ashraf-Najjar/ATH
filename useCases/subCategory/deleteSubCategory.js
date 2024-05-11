import SubCategory from "../../models/subCategory.js";

export const deleteSubCategory = async (args) => {
    const subCategoryDB = await SubCategory.updateOne({_id: args.id}, {deleted: true}).catch(err => console.log(err));
    return "Deleted succefully"
}