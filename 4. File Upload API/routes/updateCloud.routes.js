import { Router } from "express";
import upload from "../middlewares/multer.middlewares.js";
import updateUpload from "../controllers/update.controllers.js";

const router = Router();

router.route('/').put(upload.any('file'),updateUpload);

export default router;