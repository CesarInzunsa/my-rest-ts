import { Product } from '../../types';
import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    ingredients: [
        {
            _id: false,
            type: Schema.Types.ObjectId,
            ref: 'ingredients',
            required: true
        }
    ]
}, { versionKey: false })

const productModel = mongoose.model<Product>('Product', productSchema);

export default productModel;
