import { Schema, model } from "mongoose";
import { ProductInterface } from "./product.interface";

const VarientsSchema = new Schema({
    type: { type: String },
    value: { type: String }

},
    { _id: false })
    
const ProductSchema = new Schema<ProductInterface>({
    name: { type: String, trim: true, required: true, unique: true },
    description: { type: String, trim: true, required: true },
    price: { type: Number, required: true, trim: true },
    category: { type: String, trim: true, required: true },
    tags: { type: [String], required: [true, 'Tags are required here'] },
    variants: [VarientsSchema],
    inventory: {
        quantity: { type: Number },
        inStock: { type: Boolean }
    }



})


const ProductModel = model<ProductInterface>('Product', ProductSchema)

export default ProductModel