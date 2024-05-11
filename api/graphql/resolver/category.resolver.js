
import categoryUseCases from "../../../useCases/category/index.js";

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
            return await categoryUseCases.createCategory(args);
        },
        updateCategory: async (parent, args) => {
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
