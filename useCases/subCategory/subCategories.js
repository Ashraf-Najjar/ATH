import SubCategory from "../../models/subCategory.js";
import {subCategoryFilters} from "../../filters/sub-category.filters.js"
import {extractFilters} from "../../shared/helpers/filter.helper.js";

export const subCategories = async (args) => {
    let queryCondition = {};
    const skip = args.skip;
    const limit = args.limit;
    const filters = extractFilters(args.filters, subCategoryFilters(args.filters));
    queryCondition = {...queryCondition, ...filters};

    let query = SubCategory.find(queryCondition).skip(skip * limit).limit(limit);
    if (args.populate) {
        query = query.populate("category");
    }
    return await query.exec().catch(err => console.log(err));
}

export const subCategoriesCount = async (args) => {
    let query = {};
    const filters = extractFilters(args.filters, subCategoryFilters(args.filters));
    query = {...query, ...filters};
    return await SubCategory.countDocuments(query).catch(err => console.log(err));
}