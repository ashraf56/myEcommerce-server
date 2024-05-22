import express from "express"
import { ProductController } from "./product.controller"


const router = express.Router()

// products CRUD 
router.post('/createproduct', ProductController.createProductController)
router.get('/', ProductController.getAllProductController)
router.delete('/:id', ProductController.deleteProductController)
router.get('/:id', ProductController.singlePRoductController)
router.put('/:id',ProductController.updateProductController)

export const ProductRouter = router;