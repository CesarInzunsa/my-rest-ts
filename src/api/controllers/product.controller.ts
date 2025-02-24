import productModel from '../models/product.model'
import { ProductResponse } from '../../types.d'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
// import generateId from '../../middlewares/uuid.utils'

// projection to excluding the _id field
const projection = { _id: 0 }

async function getOneById (idProduct: String): Promise<ProductResponse> {
  try {
    const product = await productModel.findOne({ id: idProduct }, projection, null).populate('ingredients.ingredient', projection)
    if (product === null) {
      return { status: StatusCodes.NOT_FOUND, message: ReasonPhrases.NOT_FOUND }
    }
    return { status: StatusCodes.OK, data: product }
  } catch {
    return { status: StatusCodes.INTERNAL_SERVER_ERROR, message: ReasonPhrases.INTERNAL_SERVER_ERROR }
  }
}

export default {
  getOneById
}
