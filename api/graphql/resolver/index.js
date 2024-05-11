import {userResolver} from "./user.resolver.js";
import {clientResolver} from "./client.resolver.js";
import {categoryResolver} from "./category.resolver.js";
import {subCategoryResolver} from "./subCategory.resolver.js";
import scalarTypes from "../../../shared/api/graphql/scalar-types/index.js";

export default [
    scalarTypes.resolvers,
    userResolver,
    clientResolver,
    categoryResolver,
    subCategoryResolver
]