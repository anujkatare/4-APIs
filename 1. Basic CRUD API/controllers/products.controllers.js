import {Product} from "../models/products.model.js";

const getProducts = async (req, res, next) => {
    try {
        const {name, category, page=1, limit=10, field} = req.query;
        const query = {};
        if(name){
            query.name = name;
        }
        if(category){
            query.category = category;
        }

        const pageNum = Math.max(1, parseInt(req.query.page, 10) || 1);
        const limitNum = Math.max(1, parseInt(req.query.limit, 10) || 10);

        var products = [];
        var totalProducts = 0;

        const skip = (pageNum - 1) * limitNum;
        if(field){
            [products, totalProducts] = await Promise.all([
                Product.find(query).select(String(field)).skip(skip).limit(limitNum),
                Product.countDocuments(query)
            ]);
        }else{
            [products, totalProducts] = await Promise.all([
                Product.find(query).skip(skip).limit(limitNum),
                Product.countDocuments(query)
            ]);
        }
        

        return res.status(200).json({
            success : true,
            message: "Products fetch successfully",
            meta: {
                currentPage: page,
                limit: limitNum,
                totalProducts: totalProducts,
                hasNextPage: pageNum*limitNum <totalProducts,
                hasPrevPage: 1<pageNum
            },
            data: products
        });
    } catch(error) {
        next(error);
    }
}

export default getProducts;

