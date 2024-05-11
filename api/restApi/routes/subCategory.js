import express from "express";
import subCategoryUseCases from "../../../useCases/subCategory/index.js";

export const subCategoryRoutes = express.Router();

subCategoryRoutes.get('/list', async(req, res) => {
    const subCategorys = await subCategoryUseCases.subCategories({...req.body, populate: true});
    return res.status(201).json({
        subCategorys: subCategorys
    })
});

subCategoryRoutes.get('/:id', async(req, res) => {
    const subCategory = await subCategoryUseCases.subCategory(req.params);
    return res.status(201).json({
        subCategory: subCategory
    })
});

subCategoryRoutes.post('/create', async(req, res) => {
    const subCategory = await subCategoryUseCases.createSubCategory(req.body);
    return res.status(201).json({
        message: 'SubCategory created Successfully',
        result: subCategory
    })
});

subCategoryRoutes.post('/update', async(req, res) => {
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
