
import subCategoryUseCases from "../../../useCases/subCategory/index.js";
import categoryUseCases from "../../../useCases/category/index.js";

import {validateSubCategorySchema} from "../../../validators/subCategory-validators.js";
import { validate } from "../../../validators/validate.js";

export const subCategoryResolver = {
    Query: {
        subCategory: async (parent, args) => {
            return await subCategoryUseCases.subCategory(args);
        },
        subCategories: async (parent, args) => {
            return await subCategoryUseCases.subCategories(args);
        }
    },
    SubCategory: {
        async category(parent){
            return await categoryUseCases.category({id: parent.category});
        }
    },
    Mutation: {
        createSubCategory: async (parent, args) => {
            await validate(validateSubCategorySchema(), args.subCategory);
            return await subCategoryUseCases.createSubCategory(args);
        },
        updateSubCategory: async (parent, args) => {
            await validate(validateSubCategorySchema(), args.subCategory);
            return await subCategoryUseCases.updateSubCategory(args);
        },
        deleteSubCategory: async (parent, args) => {
            return await subCategoryUseCases.deleteSubCategory(args);
        },
        enableSubCategory: async (parent, args) => {
            return await subCategoryUseCases.enableSubCategory(args);
        },
        disableSubCategory: async (parent, args) => {
            return await subCategoryUseCases.disableSubCategory(args);
        },
    }
}
