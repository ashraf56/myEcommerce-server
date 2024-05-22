import { Request, Response } from "express";
import ProductValidationSchema from "./product.validation";
import { ProductService } from "./product.service";


const createProductController = async (req: Request, res: Response) => {

    try {
        const product = req.body;
        // Zod validation
        const validateProduct = ProductValidationSchema.parse(product);
        // send validate product data.
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
            message: error || "Something error"

        })
    }
}


const getAllProductController = async (req:Request,res:Response)=>{

try {
    const allitem = await ProductService.getAllProductfromDB()
   
    res.status(200).json({allitem})

} catch (error) {
    res.status(500).json({
        success: false,
        message: error || "Something error"

    })

}


}
const deleteProductController = async (req:Request, res:Response)=> {

try {
    const {id} = req.params
     const product = await ProductService.deleteProductFromDB(id)

     res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: product
    })


} catch (error) {
     res.status(500).json({
        success: false,
        message: error || "Something error"

    })
}


}


export const ProductController = {
    createProductController, getAllProductController,deleteProductController
}