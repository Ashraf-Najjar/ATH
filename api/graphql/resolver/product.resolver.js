
import productUseCases from "../../../useCases/product/index.js";
import subCategoryUseCases from "../../../useCases/subCategory/index.js";
import categoryUseCases from "../../../useCases/category/index.js";

import {validateProductSchema} from "../../../validators/product.validators.js";
import { validate } from "../../../validators/validate.js";

export const productResolver = {
    Query: {
        product: async (parent, args) => {
            return await productUseCases.product(args);
        },
        products: async (parent, args) => {
            return await productUseCases.products(args);
        }
    },
    Product: {
        async category(parent){
            return await categoryUseCases.category({id: parent.category});
        },
        async subCategory(parent){
            return await subCategoryUseCases.subCategory({id: parent.subCategory});
        }
    },
    Mutation: {
        createProduct: async (parent, args) => {
            await validate(validateProductSchema(), args.product);
            return await productUseCases.createProduct(args);
        },
        updateProduct: async (parent, args) => {
            await validate(validateProductSchema(), args.product);
            return await productUseCases.updateProduct(args);
        },
        deleteProduct: async (parent, args) => {
            return await productUseCases.deleteProduct(args);
        },
        enableProduct: async (parent, args) => {
            return await productUseCases.enableProduct(args);
        },
        disableProduct: async (parent, args) => {
            return await productUseCases.disableProduct(args);
        },
    }
}
