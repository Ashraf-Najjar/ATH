import express from "express";
import productUseCases from "../../../useCases/product/index.js";

import {validateProductSchema} from "../../../validators/product.validators.js";
import { validate } from "../../../validators/validate.js";

export const productRoutes = express.Router();

productRoutes.get('/list', async(req, res) => {
    const skip = +req.query.skip;
    const limit = +req.query.limit;
    const filters = typeof req.query.filters === "string" ? JSON.parse(req.query.filters) : req.query.filters;
    const products = await productUseCases.products({...req.body, skip, limit, filters});
    const productsCount = await productUseCases.productsCount({...req.body, skip, limit, filters});
    return res.status(201).json({
        products: products,
        count: productsCount
    })
});

productRoutes.get('/:id', async(req, res) => {
    const product = await productUseCases.product(req.params);
    return res.status(201).json({
        product: product
    })
});

productRoutes.post('/create', async(req, res) => {
    try {
        await validate(validateProductSchema(), req.body.product);
        const product = await productUseCases.createProduct(req.body);
        return res.status(201).json({
            message: 'Product created Successfully',
            result: product
        })
    }catch(err) {
        return res.status(401).json(err)
    }
});

productRoutes.post('/update', async(req, res) => {
    await validate(validateProductSchema(), req.body.product);
    const product = await productUseCases.updateProduct(req.body);
    return res.status(201).json({
        message: 'Product updated Successfully',
        result: product
    })
});

productRoutes.post('/delete', async(req, res) => {
    const product = await productUseCases.deleteProduct(req.body);
    return res.status(201).json({
        message: 'Product deleted Successfully',
        result: product
    })
});

productRoutes.post('/disable', async(req, res) => {
    const product = await productUseCases.disableProduct(req.body);
    return res.status(201).json({
        message: 'Product disabled Successfully',
        result: product
    })
});

productRoutes.post('/enable', async(req, res) => {
    const product = await productUseCases.enableProduct(req.body);
    return res.status(201).json({
        message: 'Product enabled Successfully',
        result: product
    })
});
