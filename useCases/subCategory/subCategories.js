import SubCategory from "../../models/subCategory.js";

export const subCategories = async (args) => {
    let query = SubCategory.find();
    if (args.populate) {
        query = query.populate("category");
    }
    return await query.exec().catch(err => console.log(err));
}