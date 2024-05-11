import SubCategory from "../../models/subCategory.js";

export const subCategory = async (args) => {
    return await SubCategory.findOne({_id: args.id}).catch(err => console.log(err));
}