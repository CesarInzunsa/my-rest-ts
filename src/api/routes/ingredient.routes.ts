import {Router} from "express";
import logger from "../../middlewares/logger";
import {ReasonPhrases, StatusCodes} from "http-status-codes";

const router = Router()

router.get('/:ingredientId', async (req, res) => {
    const {ingredientId} = req.params
    try {
        logger.info(`Fetching ingredient with id: ${ingredientId}`)

        const result = await ingredientController.getOneById(ingredientId)

        if (result === null) {
            logger.warn(`Ingredient with id: ${ingredientId} not found`)
            res.status(StatusCodes.NOT_FOUND).json({message: ReasonPhrases.NOT_FOUND})
        }

        logger.info(`Ingredient with id: ${ingredientId} found`)
        res.status(StatusCodes.OK).json({message: ReasonPhrases.OK})

    } catch (e) {
        logger.info(`Error fetching ingredient with id: ${ingredientId}`, {error: e})
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: ReasonPhrases.INTERNAL_SERVER_ERROR})

    }
})