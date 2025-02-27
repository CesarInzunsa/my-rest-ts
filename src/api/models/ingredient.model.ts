import mongoose from 'mongoose'

// Desestructuramos Schema y model desde mongoose
const { Schema, model } = mongoose

const ingredientSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    stock: { type: Boolean, default: true }
}, { versionKey: false })

export default model('ingredients', ingredientSchema, 'ingredients')
