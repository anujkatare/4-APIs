import { Router } from "express";
import logout from "../controllers/logout.controllers.js";

const router = Router();

router.route('/').post(logout);

export default router;