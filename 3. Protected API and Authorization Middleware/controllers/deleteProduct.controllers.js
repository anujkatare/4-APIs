import { Product } from "../models/products.model.js";
import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";

const DeletedProduct = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        
        const { id } = req.body;

        if(!id || !bearerToken){
            return res.status(401).json(
                {
                    success: false,
                    message: "Token or ProductId is missing"
                }
            )
        }
        const token = bearerToken.split(' ')[1];
        
        const verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const UserId = verifiedToken.id;

        if(!UserId){
            return res.status(401).json(
                {
                    success: false,
                    message: "Token is wrong or User don't exist"
                }
            )
        }

        const UserRole = await User.findById(UserId).select('role');
        
        if(UserRole.role !== 'admin'){
           return res.status(401).json({
            success: false,
            message: "You are not admin"
           })
        }

        
        const DeletedProduct = await Product.findByIdAndDelete(id);

        if(!DeletedProduct){
            return res.status(404).json({
                success: false,
                message: "Product affiliated with this Id won't exist"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted",
            data: DeletedProduct
        })
    } catch(error) {
        next(error);
    }
}

export default DeletedProduct;