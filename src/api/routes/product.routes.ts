import productController from '../controllers/product.controller'
import { ReasonPhrases, StatusCodes } from "http-status-codes"
import logger from '../../middlewares/logger'
import { Router } from 'express'

const router = Router()

router.get('/:idProduct', async (req, res) => {
    try {
        const { idProduct } = req.params
        const result = await productController.getOneById(idProduct)

        if (result === null) {
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND })
        }

        res.status(StatusCodes.OK).json(result)
    } catch (e) {
        logger.error(e)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
    }
})

router.get('/', async (_req, res) => {
    try {
        const result = await productController.getAll()

        if (result === null || result.length === 0) {
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND })
        }

        res.status(StatusCodes.OK).json(result)
    } catch (e) {
        logger.error(e)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
    }
})

export default router
