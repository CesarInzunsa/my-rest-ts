import { Document } from 'mongoose'

export interface Product extends Document {
  id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  ingredients: {
    ingredient: string;
    quantity: number;
  }[];
}
