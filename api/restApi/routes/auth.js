import express from "express";
import authUseCases from "../../../useCases/auth/index.js";

// import {validateUserSchema} from "../../../validators/user-validators.js";
import { validate } from "../../../validators/validate.js";

export const authRoutes = express.Router();

authRoutes.post('/login', async(req, res) => {
    try {
        // await validate(validateUserSchema(), req.body.user);
        const response = await authUseCases.login(req.body);
        return res.status(201).json({
            message: 'User login Successfully',
            result: response
        })
    }catch(err) {
        return res.status(401).json(err)
    }
});



authRoutes.post('/signup', async(req, res) => {
    try {
        // await validate(validateUserSchema(), req.body.user);
        const response = await authUseCases.signup(req.body);
        return res.status(201).json({
            message: 'Client created Successfully',
            result: response
        })
    }catch(err) {
        return res.status(401).json(err)
    }
});