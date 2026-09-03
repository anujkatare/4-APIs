import { Router } from "express";
import updateProduct from "../controllers/updateProducts.controllers.js";

const router = Router();

router.route('/:id').patch(updateProduct);

export default router;