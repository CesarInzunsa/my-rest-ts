// import generateId from '../../middlewares/uuid.utils'
import productModel from '../models/product.model'
import logger from '../../middlewares/logger';
import { Product } from '../../types'

// projection to excluding the _id field
const projection = { _id: 0 }

async function getOneById(idProduct: string): Promise<Product | null> {
    const product = await productModel.findOne({ id: idProduct }, projection).populate('ingredients.ingredient', projection)
    if (product === null) {
        logger.warn(`Product with id: ${idProduct} not found`);
        return null
    }

    return product.toObject()
}

async function getAll(): Promise<Product[] | null> {
    const products = await productModel.find({}, projection).populate('ingredients.ingredient', projection)
    if (products.length === 0) {
        logger.warn('No products found');
        return null
    }

    return products.map(product => product.toObject())
}


export default {
    getOneById,
    getAll
}
