import {Product} from '../models/products.model.js';

const deleteProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const productId = id;

        if(!productId){
            return res.status(404).json({
                success: false,
                message: 'Id is invalid, Product not found'
            });
        }
        

        const deletedProduct = await Product.findByIdAndDelete(productId).lean();

        if(!deletedProduct){
            return res.status(400).json({
                success: false,
                message: 'Product not deleted'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Product deleted',
            data: deleteProduct
        })
    } catch(error) {
        next(error);
    }
}

export default deleteProduct;