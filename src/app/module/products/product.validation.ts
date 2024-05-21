import z from 'zod'

const Variantsvalidation = z.object({
    type: z.string(),
    value: z.string()


})
const Tinventory = z.object({
    quantity: z.number(),
    inStock: z.boolean()
})

const ProductValidationSchema = z.object({

    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.string().array(),
    variants: z.array(Variantsvalidation),
    inventory: Tinventory


})


export default ProductValidationSchema