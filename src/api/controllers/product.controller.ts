import productModel from '../models/product.model'
// @ts-ignore
import generateId from '../../middlewares/uuid.utils'

// projection to excluding the _id field
const projection = { _id: 0 }

async function getOneById(idProduct: String): Promise<any> {
    try {
        const product = await productModel.findOne({ id: idProduct }, projection, null).populate('ingredients.ingredient', projection)
        if (product === null) {
            return { status: 404, message: 'Product not found.' }
        }
        return { status: 200, data: product }
    } catch {
        return { status: 500, message: 'Internatl server error while getting the product.' }
    }
}

export default {
    getOneById
}
