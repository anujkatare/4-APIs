import { Router } from "express";
import deleteProduct from "../controllers/deleteProducts.controllers.js";

const router = Router();

router.route('/:id').delete(deleteProduct);

export default router;