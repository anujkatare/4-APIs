import jwt from "jsonwebtoken";
import { Profile } from "../models/user.models.js";

const verifyJWT = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ","");

        if(!token){
            return res.status(401).json({
                success: false,
                message: 'Token missing'
            })
        }
        
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await Profile.findById(decodedToken.id).select("-password").lean();

        if(!user){
            return res.status(401).json({
                success: false,
                message: 'User not found'
            })
        }
        
        req.user = user;
        next();
    } catch(error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired access token",
            error: error.message
        });
    }
}

export default verifyJWT;