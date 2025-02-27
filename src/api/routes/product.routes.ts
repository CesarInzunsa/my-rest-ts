import productController from '../controllers/product.controller'
import { ReasonPhrases, StatusCodes } from "http-status-codes"
import logger from '../../middlewares/logger'
import { Router } from 'express'

const router = Router()

router.get('/:idProduct', async (req, res) => {
    const { idProduct } = req.params
    try {
        logger.info(`Fetching product with id: ${idProduct}`)

        const result = await productController.getOneById(idProduct)

        if (result === null) {
            logger.warn(`Product with id: ${idProduct} not found`)
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND })
        }

        logger.info(`Product with id: ${idProduct} found`)
        res.status(StatusCodes.OK).json(result)
    } catch (e) {
        logger.error(`Error fetching product with id: ${idProduct}`, { error: e })
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
    }
})

router.get('/', async (_req, res) => {
    try {
        logger.info('Fetching all products')

        const result = await productController.getAll()

        if (result === null || result.length === 0) {
            logger.warn('No products found')
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND })
        }

        logger.info('Products found');
        res.status(StatusCodes.OK).json(result)
    } catch (e) {
        logger.error('Error fetching products', { error: e })
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
    }
})

export default router
