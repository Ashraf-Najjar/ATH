import express from "express";
import categoryUseCases from "../../../useCases/category/index.js";

import {validateCategorySchema} from "../../../validators/category-validators.js";
import { validate } from "../../../validators/validate.js";

export const categoryRoutes = express.Router();

categoryRoutes.get('/list', async(req, res) => {
    const skip = +req.query.skip;
    const limit = +req.query.limit;
    const filters = typeof req.query.filters === "string" ? JSON.parse(req.query.filters) : req.query.filters;
    const categories = await categoryUseCases.categories({...req.body, skip, limit, filters});
    const categoriesCount = await categoryUseCases.categoriesCount({...req.body, skip, limit, filters});
    return res.status(201).json({
        categories: categories,
        count: categoriesCount
    })
});

categoryRoutes.get('/:id', async(req, res) => {
    const category = await categoryUseCases.category(req.params);
    return res.status(201).json({
        category: category
    })
});

categoryRoutes.post('/create', async(req, res) => {
    await validate(validateCategorySchema(), req.body.category);
    const category = await categoryUseCases.createCategory(req.body);
    return res.status(201).json({
        message: 'Category created Successfully',
        result: category
    })
});

categoryRoutes.post('/update', async(req, res) => {
    await validate(validateCategorySchema(), req.body.category);
    const category = await categoryUseCases.updateCategory(req.body);
    return res.status(201).json({
        message: 'Category updated Successfully',
        result: category
    })
});

categoryRoutes.post('/delete', async(req, res) => {
    const category = await categoryUseCases.deleteCategory(req.body);
    return res.status(201).json({
        message: 'Category deleted Successfully',
        result: category
    })
});

categoryRoutes.post('/disable', async(req, res) => {
    const category = await categoryUseCases.disableCategory(req.body);
    return res.status(201).json({
        message: 'Category disabled Successfully',
        result: category
    })
});

categoryRoutes.post('/enable', async(req, res) => {
    const category = await categoryUseCases.enableCategory(req.body);
    return res.status(201).json({
        message: 'Category enabled Successfully',
        result: category
    })
});
