import express from "express"
import { ProductController } from "./product.controller"


const router = express.Router()


router.post('/createproduct', ProductController.createProductController)

export const ProductRouter = router;