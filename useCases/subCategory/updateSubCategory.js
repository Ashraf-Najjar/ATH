import SubCategory from "../../models/subCategory.js";

export const updateSubCategory = async (args) => {
    const subCategoryDB = await SubCategory.findById(args.id).catch(err => console.log(err));
    if(!subCategoryDB) return "SubCategory not exists";
    const updated = await SubCategory.updateOne({_id: subCategoryDB._id}, {$set: args.subCategory});
    return "Update succefully"
}