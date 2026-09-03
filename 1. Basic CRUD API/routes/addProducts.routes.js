import { Router } from "express";
import addProduct from "../controllers/addProducts.controllers.js";

const router = Router();

router.route('/').post(addProduct);

export default router;