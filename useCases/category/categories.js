import Category from "../../models/category.js";
import {categoryFilters} from "../../filters/category.filters.js"
import {extractFilters} from "../../shared/helpers/filter.helper.js";

export const categories = async (args) => {
    let query = {};
    const skip = args.skip;
    const limit = args.limit;
    const filters = extractFilters(args.filters, categoryFilters(args.filters));
    query = {...query, ...filters};
    return await Category.find(query).skip(skip * limit).limit(limit).catch(err => console.log(err));
}

export const categoriesCount = async (args) => {
    let query = {};
    const skip = args.skip;
    const limit = args.limit;
    const filters = extractFilters(args.filters, categoryFilters(args.filters));
    query = {...query, ...filters};
    return await Category.countDocuments().catch(err => console.log(err));
}