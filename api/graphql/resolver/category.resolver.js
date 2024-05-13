
import categoryUseCases from "../../../useCases/category/index.js";

import {validateCategorySchema} from "../../../validators/category-validators.js";
import { validate } from "../../../validators/validate.js";

export const categoryResolver = {
    Query: {
        category: async (parent, args) => {
            return await categoryUseCases.category(args);
        },
        categories: async (parent, args) => {
            return await categoryUseCases.categories(args);
        }
    },
    Mutation: {
        createCategory: async (parent, args) => {
            await validate(validateCategorySchema(), args.category);
            return await categoryUseCases.createCategory(args);
        },
        updateCategory: async (parent, args) => {
            await validate(validateCategorySchema(), args.category);
            return await categoryUseCases.updateCategory(args);
        },
        deleteCategory: async (parent, args) => {
            return await categoryUseCases.deleteCategory(args);
        },
        enableCategory: async (parent, args) => {
            return await categoryUseCases.enableCategory(args);
        },
        disableCategory: async (parent, args) => {
            return await categoryUseCases.disableCategory(args);
        },
    }
}
