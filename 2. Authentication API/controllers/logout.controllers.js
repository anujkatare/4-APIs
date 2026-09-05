import { User } from "../models/user.models.js"

const logout = async (req, res, next) => {
    try {
        res.clearCookie('refreshToken',{
            httpOnly: true,
            secure: process.env.NODE_ENV = "production",
            sameSite: 'strict'
        });

        res.status(200).json({
            success: true,
            message: 'Logout Successfully'
        })
    } catch(error) {
        next(error);
    }
}

export default logout;