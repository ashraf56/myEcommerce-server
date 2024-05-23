import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { ProductRouter } from './app/module/products/product.route'
import { Orderrouter } from './app/module/order/order.route'


const app = express()
app.use(cors())
app.use(express.json())
//Product Crud
app.use('/api/products', ProductRouter)

//Order
app.use('/api/orders', Orderrouter)

app.get('/', (req: Request, res: Response , next:NextFunction) => {

    try {
        res.send({

            message: 'e commerce server'
        })
    } catch (error) {
       next(error)
    }

})


// global error handling for all route
app.all('*', (req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use( (error:any, req:Request,  res:Response, )=>{

if (error) {
    res.status(400).json({
  success: false,
  message:'Something wrong'

    })
}

}  )



export default app;