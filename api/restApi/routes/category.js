import express from "express";
import categoryUseCases from "../../../useCases/category/index.js";

export const categoryRoutes = express.Router();

categoryRoutes.get('/list', async(req, res) => {
    const categorys = await categoryUseCases.categories(req.body);
    return res.status(201).json({
        categorys: categorys
    })
});

categoryRoutes.get('/:id', async(req, res) => {
    const category = await categoryUseCases.category(req.params);
    return res.status(201).json({
        category: category
    })
});

categoryRoutes.post('/create', async(req, res) => {
    const category = await categoryUseCases.createCategory(req.body);
    return res.status(201).json({
        message: 'Category created Successfully',
        result: category
    })
});

categoryRoutes.post('/update', async(req, res) => {
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

categoryRoutes.post('/disabled', async(req, res) => {
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
