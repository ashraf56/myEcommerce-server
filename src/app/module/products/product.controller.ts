import { Request, Response } from "express";
import ProductValidationSchema from "./product.validation";
import { ProductService } from "./product.service";


const createProductController = async (req: Request, res: Response) => {

    try {
        const product = req.body;
        const validateProduct = ProductValidationSchema.parse(product);

        const createdProduct = await ProductService.createProductDB(validateProduct);


        res.status(200).json({
            success: true,
            message: "Product added successfully",
            data: createdProduct
        })



        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something error"

        })
    }
}




export const ProductController = {
    createProductController
}