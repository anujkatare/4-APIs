import { User } from '../models/user.models.js';
import bcrypt from 'bcrypt';


const login = async (req, res , next) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
            success: false,
            message: 'insert correct email or password'
            })
        }
        
        
        const loggedinUser = await User.findOne({email});
        if(!loggedinUser){
            return res.status(401).json({
                success: false,
                message: 'No user exist with this email'
            })
        }
        const isMatch = await bcrypt.compare(password, loggedinUser.password);

        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: 'No user found, the email or password is incorrect'
            })
        }

        const accessToken = loggedinUser.generateAccessToken();
        const refreshToken = loggedinUser.generateRefreshToken();

        res.cookie('refreshToken', refreshToken, {
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7*24*60*60*1000
        });

        return res.status(200).json({
            success: true,
            message: 'user loggedin',
            data: [loggedinUser.name, loggedinUser.email,loggedinUser.role, accessToken]
        })
    } catch(error) {
        next(error);
    }
}

export default login;