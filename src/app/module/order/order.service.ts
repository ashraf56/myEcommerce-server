import ProductModel from "../products/product.model";
import { OrderInterface } from "./order.interface";
import OrderModel from "./order.model";


const createOrderDB = async (order: OrderInterface) => {
   
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const product: any = await ProductModel.findById(order.productId) // find product 

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

const getAllorder = async (email: string) => {
    let query = {}
    if (email) {
        query = { email: email }
    }
    
    const allorder = await OrderModel.find(query)
    return allorder
}




export const OrderService = {
    createOrderDB, getAllorder
}