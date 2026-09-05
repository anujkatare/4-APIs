import { Router } from "express";
import login from "../controllers/login.controllers.js";

const router = Router();

router.route('/').post(login);

export default router;