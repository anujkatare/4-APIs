import { Router } from "express";
import updatedUser from "../controllers/updateProfile.controllers.js";

const router = Router();

router.route('/').patch(updatedUser);

export default router;