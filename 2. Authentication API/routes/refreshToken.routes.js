import tokenRefresher from "../controllers/token.controllers.js";
import { Router } from "express";

const router = Router();

router.route('/').post(tokenRefresher);

export default router;