import { ProductInterface } from "./product.interface";
import ProductModel from "./product.model";


const createProductDB  = async (products:ProductInterface)=>{

const item = await ProductModel.create(products);

return item

}


export const ProductService = {
    createProductDB
}