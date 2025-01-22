import express from "express";
import subCategoryUseCases from "../../../useCases/subCategory/index.js";

import {validateSubCategorySchema} from "../../../validators/subCategory-validators.js";
import { validate } from "../../../validators/validate.js";

export const subCategoryRoutes = express.Router();

subCategoryRoutes.get('/list', async(req, res) => {
    const skip = +req.query.skip;
    const limit = +req.query.limit;
    const filters = typeof req.query.filters === "string" ? JSON.parse(req.query.filters) : req.query.filters;
    const subCategories = await subCategoryUseCases.subCategories({...req.body, skip, limit, filters, populate: true});
    const subCategoriesCount = await subCategoryUseCases.subCategoriesCount({...req.body, skip, limit, filters});
    return res.status(201).json({
        subCategories: subCategories,
        count: subCategoriesCount
    })
});

subCategoryRoutes.get('/:id', async(req, res) => {
    const subCategory = await subCategoryUseCases.subCategory(req.params);
    return res.status(201).json({
        subCategory: subCategory
    })
});

subCategoryRoutes.post('/create', async(req, res) => {
    await validate(validateSubCategorySchema(), req.body.subCategory);
    const subCategory = await subCategoryUseCases.createSubCategory(req.body);
    return res.status(201).json({
        message: 'SubCategory created Successfully',
        result: subCategory
    })
});

subCategoryRoutes.post('/update', async(req, res) => {
    await validate(validateSubCategorySchema(), req.body.subCategory);
    const subCategory = await subCategoryUseCases.updateSubCategory(req.body);
    return res.status(201).json({
        message: 'SubCategory updated Successfully',
        result: subCategory
    })
});

subCategoryRoutes.post('/delete', async(req, res) => {
    const subCategory = await subCategoryUseCases.deleteSubCategory(req.body);
    return res.status(201).json({
        message: 'SubCategory deleted Successfully',
        result: subCategory
    })
});

subCategoryRoutes.post('/disabled', async(req, res) => {
    const subCategory = await subCategoryUseCases.disableSubCategory(req.body);
    return res.status(201).json({
        message: 'SubCategory disabled Successfully',
        result: subCategory
    })
});

subCategoryRoutes.post('/enable', async(req, res) => {
    const subCategory = await subCategoryUseCases.enableSubCategory(req.body);
    return res.status(201).json({
        message: 'SubCategory enabled Successfully',
        result: subCategory
    })
});
