import { Router } from "express";
import deleteUpload from "../controllers/delete.controllers.js";

const router = Router();

router.route('/').delete(deleteUpload);

export default router;