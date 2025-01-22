import Product from "../../models/product.js";

import {productFilters} from "../../filters/product.filters.js"
import {extractFilters} from "../../shared/helpers/filter.helper.js";
export const products = async (args) => {
    let query = {};
    const skip = args.skip;
    const limit = args.limit;
    const filters = extractFilters(args.filters, productFilters(args.filters));
    query = {...query, ...filters};
    return await Product.find(query).skip(skip * limit).limit(limit).catch(err => console.log(err));
}

export const productsCount = async (args) => {
    let query = {};
    const skip = args.skip;
    const limit = args.limit;
    const filters = extractFilters(args.filters, productFilters(args.filters));
    query = {...query, ...filters};
    return await Product.countDocuments(query).catch(err => console.log(err));
}