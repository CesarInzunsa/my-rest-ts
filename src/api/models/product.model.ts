import mongoose from 'moongose'

// Desestructuramos Schema y model desde mongoose
const { Schema, model } = mongoose

const productsSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    ingredients: [
        {
            _id: false,
            ingredient: {
                type: Schema.Types.ObjectId,
                ref: 'ingredients',
                required: true
            }
        }
    ]
}, { versionKey: false })

export default model('products', productsSchema, 'products')
