import { Router } from "express";
import upload from "../middlewares/multer.middlewares.js";
import uploadFile from "../controllers/upload.controllers.js";

const router = Router();

router.route('/').post(upload.any('file'),uploadFile);

export default router;