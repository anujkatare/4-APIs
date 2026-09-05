import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";

const tokenRefresher = async (req, res, next) => {
    try {
       const oldToken = req.cookies.refreshToken;

       if(!oldToken){
        return res.status(401).json({
            success: false,
            message: 'No token found'
        })
       }

       const decodedToken = jwt.verify(oldToken, process.env.REFRESH_TOKEN_SECRET);

       if(!decodedToken){
        return res.status(401).json({
            success: false,
            message: 'Token not verified'
        })
       }

       const user = await User.findById(decodedToken.id);

       if(!user){
        return res.status(401).json({
            success: false,
            message: 'User not found'
        })
       }

       const newAccessToken = user.generateAccessToken();

       return res.status(200).json({
        success: true,
        message: "New Access Token generated",
        accessToken : newAccessToken
       })
    } catch(error) {
         return res.status(500).json({
            success: false,
            message: "Internal Server Error during refresh",
            error: error.message
         });
    }
}

export default tokenRefresher;