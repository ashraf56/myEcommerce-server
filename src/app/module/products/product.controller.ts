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
            message: "Product created successfully!",
            data: createdProduct
        })



        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error || error.message || "Something error"

        })
    }
}


const getAllProductController = async (req: Request, res: Response) => {

    try {
        const searchTerm = req.query.searchTerm as string | null;
        
        const allitem = await ProductService.getAllProductfromDB(searchTerm)

        res.status(200).json({
            success: true,
            message: searchTerm ? `Products matching search term ${searchTerm} fetched successfully!` : "Product fetched successfully!",
            data: allitem
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error || "Something error"

        })

    }


}
const deleteProductController = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
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


const singlePRoductController = async (req: Request, res: Response) => {

    try {

        const { id } = req.params
        const singleProduuct = await ProductService.FindSingleProductFromDB(id)

        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: singleProduuct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error || "Something error"

        })
    }

}


const updateProductController = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const updatedata = req.body;



        const result = await ProductService.updatePRoductfromDB(id, updatedata)

        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error || "Something error"

        })
    }


}


export const ProductController = {
    createProductController, getAllProductController, deleteProductController, singlePRoductController
    , updateProductController
}