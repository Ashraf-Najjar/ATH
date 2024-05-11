import Category from "../../models/category.js";

export const categories = async (args) => {
    return await Category.find().catch(err => console.log(err));
}