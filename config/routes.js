import bodyParser from "body-parser";

import {userRoutes} from "../api/restApi/routes/user.js";
import {clientRoutes} from "../api/restApi/routes/client.js";
import {categoryRoutes} from "../api/restApi/routes/category.js";
import {subCategoryRoutes} from "../api/restApi/routes/subCategory.js";

export const applyRoutes = (app) => {
    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        next();
    });
    
    app.use('/user', userRoutes);
    app.use('/client', clientRoutes);
    app.use('/category', categoryRoutes);
    app.use('/subCategory', subCategoryRoutes);
}