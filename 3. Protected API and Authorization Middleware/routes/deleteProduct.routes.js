import { Router } from "express";
import DeletedProduct from "../controllers/deleteProduct.controllers.js";

const router = Router();

router.route('/').delete(DeletedProduct);

export default router;