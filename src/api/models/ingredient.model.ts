import {Ingredient} from "../../types"
import {Schema, model} from 'mongoose'

const ingredientSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    stock: {type: Boolean, default: true}
}, {versionKey: false})

export default model<Ingredient>('ingredients', ingredientSchema, 'ingredients')
