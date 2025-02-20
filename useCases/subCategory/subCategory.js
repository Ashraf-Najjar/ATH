import SubCategory from "../../models/subCategory.js";

export const subCategory = async (args) => {
    let query = SubCategory.findOne({_id: args.id});
    if (args.populate) {
        query = query.populate("category");
    }
    return await query.exec().catch(err => console.log(err));
}