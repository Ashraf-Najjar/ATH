import Category from "../../models/category.js";

export const createCategory = async (args) => {
    const category = new Category(args.category);
    const date = new Date();
    category.createdAt = date;
    category.lastUpdate = date;
    await category.save().catch(err => console.log(err));
    return category;
}