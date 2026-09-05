import {User} from '../models/user.models.js'

const signup = async (req, res, next) => {
    try {
         const {name, email, password} = req.body;

         if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: 'name or email or password not found'
            })
         }

         const signedUser = await User.create(
            {
                name,
                email,
                password
            }
         );

         return res.status(200).json({
            success: true,
            message: 'User signedup',
            data: {
                name,
                email
            }
         })
    } catch(error) {
        next(error);
    }
}

export default signup;