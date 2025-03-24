// import generateId from '../../middlewares/uuid.utils'
import IngredientModel from '../models/ingredient.model'
import logger from '../../middlewares/logger'
import {Ingredient} from '../../types'

// projection to excluding the _id field
const projection = {_id: 0}

async function getOneById(idIngredient: string): Promise<Ingredient | null> {
    const ingredient = await IngredientModel.findOne({id: idIngredient}, projection)
    if (ingredient === null) {
        logger.warn(`Ingredient with id: ${idIngredient} not found`);
        return null
    }

    return ingredient.toObject()
}

async function getAll(): Promise<Ingredient[] | null> {
    const ingredients = await IngredientModel.find({}, projection)
    if (ingredients.length === 0) {
        logger.warn('No ingredients found');
        return null
    }

    return ingredients.map(ingredient => ingredient.toObject())
}

export default {
    getOneById,
    getAll
}