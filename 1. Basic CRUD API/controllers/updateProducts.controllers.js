import { Product } from "../models/products.model.js";

const updateProduct = async (req, res, next) => {
    try {
       const productId = req.params.id;
       const update = req.body;


       const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        {$set: update},
        {
            returnDocument: 'after',
            runValidators: true
        }
       ).lean();

       if(!updatedProduct){
        return res.status(400).json({
            success: false,
            message: 'Product Not Updated'
        })
       }

       return res.status(200).json({
        success: true,
        message: 'Product Updated'
       })
    } catch(error) {
        next(error);
    }
}

export default updateProduct;