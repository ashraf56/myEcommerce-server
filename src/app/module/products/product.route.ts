import express from "express"
import { ProductController } from "./product.controller"


const router = express.Router()

// products CRUD 
router.post('/createproduct', ProductController.createProductController)
router.get('/',ProductController.getAllProductController)


export const ProductRouter = router;