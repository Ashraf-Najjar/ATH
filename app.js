import bodyParser from "body-parser";

import { ApolloServer } from 'apollo-server-express'

import express from "express";
import dotenv from "dotenv";
import {dbConnection} from "./config/db-connection.js";

dotenv.config();

const app = express();



import {userRoutes} from "./api/restApi/routes/user.js";
import {clientRoutes} from "./api/restApi/routes/client.js";
import {categoryRoutes} from "./api/restApi/routes/category.js";
import {subCategoryRoutes} from "./api/restApi/routes/subCategory.js";

app.use(bodyParser.json()); //application/json

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

const port = process.env.PORT || "8080";



import defs from "./api/graphql/schema/index.js";
import resv from "./api/graphql/resolver/index.js";


// server setup
const server = new ApolloServer({
    typeDefs: defs,
    resolvers: resv
  })
  
await server.start();
server.applyMiddleware({ app })

await dbConnection();
app.listen(port);