import { Schema, model } from "mongoose";
import { OrderInterface } from "./order.interface";


const OrderSchema = new Schema<OrderInterface>({

    email: { type: String, required: true, trim: true },
    productId: { type: String, required: true },
    price: { type: Number },
    quantity: { type: Number }

})



const OrderModel = model<OrderInterface>('Order', OrderSchema)

export default OrderModel