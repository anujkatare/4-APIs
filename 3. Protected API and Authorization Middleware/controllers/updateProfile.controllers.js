import jwt  from "jsonwebtoken";
import { User } from "../models/user.models.js";

const updateUser = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        const { field, value } = req.body;
        if(!bearerToken || !field){
            return res.status(401).json(
                {
                    success: false,
                    message: "Token or field is missing"
                }
            )
        }

        const token = bearerToken.split(" ")[1];
        const verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
 
        const UserId = verifiedToken._id || verifiedToken.id; 
        if(!UserId){
            return res.status(401).json(
                {
                    success: false,
                    message: "Token is wrong or User don't exist"
                }
            )
        }


        const updatedFieldUser = await User.findByIdAndUpdate(
            UserId,
            {[field] : value},
            { new: true, runValidators: true }
        ).select("-password")

        if(!updatedFieldUser){
            return res.status(404).json(
                {
                    success: false,
                    message: "User not found"
                }
            )
        }

        return res.status(200).json(
            {
                success: true,
                message: "User information successfully updated",
                data: updatedFieldUser
            }
        )
    } catch(error) {
        next(error);
    }
}

export default updateUser;