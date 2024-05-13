import express from "express";
import clientUseCases from "../../../useCases/client/index.js";

import {validateClientSchema} from "../../../validators/client-validators.js";
import { validate } from "../../../validators/validate.js";

export const clientRoutes = express.Router();

clientRoutes.get('/list', async(req, res) => {
    const clients = await clientUseCases.clients(req.body);
    return res.status(201).json({
        clients: clients
    })
});

clientRoutes.get('/:id', async(req, res) => {
    const client = await clientUseCases.client(req.params);
    return res.status(201).json({
        client: client
    })
});

clientRoutes.post('/create', async(req, res) => {
    await validate(validateClientSchema(), req.body.client);
    const client = await clientUseCases.createClient(req.body);
    return res.status(201).json({
        message: 'Client created Successfully',
        result: client
    })
});

clientRoutes.post('/update', async(req, res) => {
    await validate(validateClientSchema(), req.body.client);
    const client = await clientUseCases.updateClient(req.body);
    return res.status(201).json({
        message: 'Client updated Successfully',
        result: client
    })
});

clientRoutes.post('/delete', async(req, res) => {
    const client = await clientUseCases.deleteClient(req.body);
    return res.status(201).json({
        message: 'Client deleted Successfully',
        result: client
    })
});

clientRoutes.post('/disabled', async(req, res) => {
    const client = await clientUseCases.disableClient(req.body);
    return res.status(201).json({
        message: 'Client disabled Successfully',
        result: client
    })
});

clientRoutes.post('/enable', async(req, res) => {
    const client = await clientUseCases.enableClient(req.body);
    return res.status(201).json({
        message: 'Client enabled Successfully',
        result: client
    })
});
