import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";

import { userRoutes } from "../api/restApi/routes/user.js";
import { uploadRoutes } from "../api/restApi/routes/upload.js";
import { authRoutes } from "../api/restApi/routes/auth.js";
import { clientRoutes } from "../api/restApi/routes/client.js";
import { categoryRoutes } from "../api/restApi/routes/category.js";
import { subCategoryRoutes } from "../api/restApi/routes/subCategory.js";
import { productRoutes } from "../api/restApi/routes/product.js";
import { cartRoutes } from "../api/restApi/routes/cart.js";
import { orderRoutes } from "../api/restApi/routes/order.js";

import { fileURLToPath } from "url";

// Convert `import.meta.url` to `__dirname`
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const applyRoutes = (app) => {
  app.use(bodyParser.json());
  app.use(cors());

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

  const uploadsPath = path.join(__dirname, "../uploads");
  // Serve static files from uploads folder
  app.use("/uploads", express.static(uploadsPath));

  app.use('/upload', uploadRoutes);
  app.use('/user', userRoutes);
  app.use('/auth', authRoutes);
  app.use('/client', clientRoutes);
  app.use('/category', categoryRoutes);
  app.use('/subCategory', subCategoryRoutes);
  app.use('/product', productRoutes);
  app.use('/cart', cartRoutes);
  app.use('/order', orderRoutes);
}