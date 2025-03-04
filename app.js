import express from "express";

import {applyRoutes} from "./config/routes.js";
import {dbConnection} from "./config/db-connection.js";
import {startApolloServer} from "./config/apollo-server.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || "8080";

applyRoutes(app);

await startApolloServer(app);

await dbConnection();
console.info("Port: ", port)
app.listen(port);