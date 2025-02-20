import express from "express";
import path from "path";
import fs from "fs";
import multer from "multer";

import { fileURLToPath } from "url"; // Required for ES modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the uploads directory
const uploadDir = path.join(__dirname, "../../../uploads");

// Ensure the uploads directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}


export const uploadRoutes = express.Router();

// Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../../uploads")); // Ensures correct path resolution
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

// Helper function for error response
const handleFileUploadError = (req, res) => {
    return res.status(400).json({ message: "No file(s) uploaded" });
};

// Endpoint for single file upload
uploadRoutes.post("/single", upload.single("file"), (req, res) => {
    if (!req.file){
        return handleFileUploadError(req, res);
    }

    res.json({
        message: "File uploaded successfully",
        file: req.file,
    });
});

// Endpoint for multiple file uploads
uploadRoutes.post("/multiple", upload.array("files", 5), (req, res) => {
    if (!req.files || req.files.length === 0){
        return handleFileUploadError(req, res);
    }

    res.json({
        message: "Files uploaded successfully",
        files: req.files,
    });
});