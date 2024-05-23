import ProductModel from "../products/product.model";
import { OrderInterface } from "./order.interface";
import OrderModel from "./order.model";


const createOrderDB = async (order: OrderInterface) => {
    // find product 
    const product = await ProductModel.findById(order.productId)
    // checking product so that we can reduce error  
    if (!product) {
        throw new Error('product not found')
    }

    const productQuantity = product?.inventory.quantity;
    const orderQuantity = order?.quantity

    // if  productQuantity is less then orderQuantity then it will throw a error message
    if (productQuantity < orderQuantity) {
        throw new Error('Insufficient quantity available in inventory')
    }

    // it will reduce prduct quantity

    const Finalquantity = productQuantity - orderQuantity;

    //it will set current product quantity into finalQuantity
    product.inventory.quantity = Finalquantity
    if (Finalquantity === 0) {
        product.inventory.inStock = false
    }
    await product.save()
    // making the order
    const orders = await OrderModel.create(order);

    return orders

}


const getAllorder = async () => {
 
    const allorder = await OrderModel.find()
return allorder
}




export const OrderService = {
    createOrderDB,getAllorder
}