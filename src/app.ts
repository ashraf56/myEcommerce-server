import express, { Request, Response } from 'express'
import cors from 'cors'
import { ProductRouter } from './app/module/products/product.route'


const app = express()
app.use(cors())
app.use(express.json())
//
app.use('/api/products',ProductRouter)

app.get('/', (req:Request,res:Response)=>{

res.send('e commerce server')

})


export default app;