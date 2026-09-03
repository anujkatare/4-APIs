import {Product} from "../models/products.model.js";

const getProductsById = async (req, res, next) => {
    try {
         const productId = req.params.id;

         const product = await Product.findById(productId).lean();

         if(!product){
            return res.status(404).json({
                success: false,
                message: 'No Product Found With This Id'
            });
         }

         return res.status(200).json(product);
    } catch(error) {
       next(error);
    }
}

export default getProductsById;