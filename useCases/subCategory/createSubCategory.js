import SubCategory from "../../models/subCategory.js";

export const createSubCategory = async (args) => {
    const subCategory = new SubCategory(args.subCategory);
    const date = new Date();
    subCategory.createdAt = date;
    subCategory.lastUpdate = date;
    await subCategory.save().catch(err => console.log(err));
    return subCategory;
}