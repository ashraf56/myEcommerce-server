import { OrderInterface } from "./order.interface";
import OrderModel from "./order.model";


const createOrderDB = async (order: OrderInterface) => {
    // it will prevent duplicate insert item into db
    const existingItem = await OrderModel.findOne({ productId: order.productId })
    if (existingItem) {
        throw new Error('order already exist')
    } else {
        const item = await OrderModel.create(order);

        return item
    }



}



export const OrderService = {
    createOrderDB
}