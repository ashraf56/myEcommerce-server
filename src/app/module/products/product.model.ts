import { Schema, model } from "mongoose";
import { ProductInterface } from "./product.interface";

const VarientsSchema = new Schema({
    type: {
        type: String, required: true
    },
    value: { type: String }

})
const ProductSchema = new Schema<ProductInterface>({
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    price: { type: Number, required: true, trim: true },
    category: { type: String, trim: true, required: true },
    variants: [VarientsSchema],
    inventory: {
        quantity: { type: Number },
        inStock: { type: Boolean }
    }



})


const ProductModel = model<ProductInterface>('Product', ProductSchema)

export default ProductModel