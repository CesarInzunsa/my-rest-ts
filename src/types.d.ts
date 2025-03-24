import {Document} from 'mongoose'

export interface Ingredient extends Document {
    id: string,
    name: string,
    stock: boolean,
}

export interface Product extends Document {
    id: string;
    name: string;
    category: string;
    price: number;
    description: string;
    ingredients: Ingredient[];
}
