import express from "express"
import { OrderControllers } from "./order.controller"


const router = express.Router()


router.post('/createorder', OrderControllers.createOrderController)


export const Orderrouter = router;