import { Router } from "express";
import getProducts from "../controllers/products.controllers.js";
import getProductsById from "../controllers/productsById.controllers.js";

const router = Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);

export default router;