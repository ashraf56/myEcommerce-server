import { ProductInterface } from "./product.interface";
import ProductModel from "./product.model";


const createProductDB = async (products: ProductInterface) => {
    // it will prevent duplicate insert item into db
    const existingItem = await ProductModel.findOne({ name: products.name })
    if (existingItem) {
        throw new Error('product already exist')
    } else {
        const item = await ProductModel.create(products);

        return item
    }



}


const getAllProductfromDB = async()=>{

    const items = await  ProductModel.find()
    return items
}




export const ProductService = {
    createProductDB,
    getAllProductfromDB
}