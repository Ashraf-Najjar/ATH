import Product from "../../models/product.js";

import {productFilters} from "../../filters/product.filters.js"
import {extractFilters} from "../../shared/helpers/filter.helper.js";
export const products = async (args) => {
    let queryCondition = {};
    const skip = args.skip;
    const limit = args.limit;
    const filters = extractFilters(args.filters, productFilters(args.filters));
    queryCondition = {...queryCondition, ...filters};
    let query = Product.find(queryCondition).skip(skip * limit).limit(limit);
    if (args.populate) {
        query = query.populate(["category", "subCategory"]);
    }
    return await query.exec().catch(err => console.log(err));
}

export const productsCount = async (args) => {
    let query = {};
    const skip = args.skip;
    const limit = args.limit;
    const filters = extractFilters(args.filters, productFilters(args.filters));
    query = {...query, ...filters};
    return await Product.countDocuments(query).catch(err => console.log(err));
}