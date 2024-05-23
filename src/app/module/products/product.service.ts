import { ProductInterface } from "./product.interface";
import ProductModel from "./product.model";


const createProductDB = async (products: ProductInterface) => {
    // it will prevent duplicate insert item into db
    const existingItem = await ProductModel.findOne({ name: products.name })
    if (existingItem) {
        throw new Error('product already exist')
    } else {
        const item = await ProductModel.create(products);

        return item
    }



}


const getAllProductfromDB = async (searchTerm: string | null) => {
    //set query for search text 
    let query = {}
    if (searchTerm) {
        query = {

            $text: {
                $search: searchTerm
            }


        };

    }


    const items = await ProductModel.find(query)
    return items
}

// Delete product
const deleteProductFromDB = async (id: string) => {

    const item = await ProductModel.findByIdAndDelete(id)

    return item

}
const FindSingleProductFromDB = async (id: string) => {

    const singleitem = await ProductModel.findById(id)

    return singleitem

}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updatePRoductfromDB = async (id: string, updatedata: any) => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {
        $set: {
            name: updatedata.name,
            description: updatedata.description,
            price: updatedata.price,
            category: updatedata.category
        }
    }

    const item = await ProductModel.updateOne(
        { _id: id },
        query,
        { upsert: true }


    )

    return item


}




export const ProductService = {
    createProductDB,
    getAllProductfromDB, deleteProductFromDB, FindSingleProductFromDB,
    updatePRoductfromDB
}