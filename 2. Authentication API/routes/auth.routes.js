import { Router } from "express";
import verifyJWT from "../middlewares/auth.middlewares.js";

const router = Router();

router.route('/').get(verifyJWT, (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Profile data fetched",
        user: req.user
    });
});

export default router;