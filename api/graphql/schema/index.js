import {rootSchema} from "./root/root.schema.js";

import {userInputs} from "./user/userInput.gql.js";
import {userDefs} from "./user/userType.gql.js";

import {clientInputs} from "./client/clientInput.gql.js";
import {clientDefs} from "./client/clientType.gql.js";

import {categoryDefs} from "./category/categoryType.gql.js";
import {categoryInputs} from "./category/categoryInput.gql.js";

import {subCategoryDefs} from "./subCategory/subCategoryType.gql.js";
import {subCategoryInputs} from "./subCategory/subCategoryInput.gql.js";

import {productDefs} from "./product/productType.gql.js";
import {productInputs} from "./product/productInput.gql.js";

import addressDefs from "./shared/addressType.gql.js";
import filtersDefs from "./shared/filter.gql.js";
import filesDefs from "./shared/file.gql.js";

import scalarTypes from "../../../shared/api/graphql/scalar-types/index.js";

export default [
    scalarTypes.typedefs,
    addressDefs,
    filtersDefs,
    filesDefs,
    rootSchema,
    userDefs,
    userInputs,
    clientInputs,
    clientDefs,
    productInputs,
    productDefs,
    categoryInputs,
    categoryDefs,
    subCategoryInputs,
    subCategoryDefs
]