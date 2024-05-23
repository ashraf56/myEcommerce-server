import express, { Request, Response } from 'express'
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

app.get('/', (req: Request, res: Response) => {

    res.send('e commerce server')

})


export default app;