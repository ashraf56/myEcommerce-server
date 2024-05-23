import { Request, Response } from "express";
import { OrderService } from "./order.service";
import OrderValidation from "./order.validation";



const createOrderController = async (req: Request, res: Response) => {

    try {
        const orders = req.body;
        // zod 
        const validateOrder = OrderValidation.parse(orders)
        // send validate product data.

        const makeOrder = await OrderService.createOrderDB(validateOrder)


        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: makeOrder
        })



        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something error"

        })
    }
}



const getAllorderController = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string;
        const orderdata = await OrderService.getAllorder(email)
        // email is not match with orderdata then
        if (email && orderdata.length === 0) {
            throw new Error('no order found')
        }
        res.status(200).json({
            success: true,
            message: email ? "Orders fetched successfully for user email" : "Orders fetched successfully!",
            data: orderdata

        })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something error"

        })
    }


}


export const OrderControllers = {
    createOrderController, getAllorderController
}