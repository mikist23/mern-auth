import express from "express"
import mongoose  from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/user.routes.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/user', userRoutes )





app.listen(5000,()=> {
    console.log('Server running on port 5000')})

mongoose.connect(process.env.CONNECTION_STRING).then(()=> {
    console.log('Connected to the Database')
}).catch((error)=>{
    console.log(error)
})
