import User from "../../models/user.js";
import {userFilters} from "../../filters/user.filters.js"
import {extractFilters} from "../../shared/helpers/filter.helper.js";
export const users = async (args) => {
    let query = {};
    const skip = args.skip;
    const limit = args.limit;
    const filters = extractFilters(args.filters, userFilters(args.filters));
    query = {...query, ...filters};
    return await User.find(query).skip(skip * limit).limit(limit).catch(err => console.log(err));
}

export const usersCount = async (args) => {
    let query = {};
    const skip = args.skip;
    const limit = args.limit;
    const filters = extractFilters(args.filters, userFilters(args.filters));
    query = {...query, ...filters};
    return await User.countDocuments(query).catch(err => console.log(err));
}