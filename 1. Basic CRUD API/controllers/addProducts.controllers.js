import { Product } from "../models/products.model.js";

const addProduct = async (req, res, next) => {
    try {
       const {name, price, category, inStock} = req.body;

       if(!name || !price || !category){
           return res.status(400).json({
            success: false,
            message: 'Please fill name, price, category, inStock'
           })
       }

       const newProduct = await Product.create({
        name: name,
        price: price,
        category: category,
        inStock: inStock,
        createdAt: new Date(),
        upatedAt: new Date()
       });

       return res.status(201).json({
        success: true,
        message: 'New Product Added',
        data: newProduct
       });
    } catch(error) {
        next(error);
    }
}

export default addProduct;