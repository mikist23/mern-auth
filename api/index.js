import express from "express"
import mongoose  from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/user', userRoutes )
app.use('/api/auth', authRoutes)





app.listen(5000,()=> {
    console.log('Server running on port 5000')})

mongoose.connect(process.env.CONNECTION_STRING).then(()=> {
    console.log('Connected to the Database')
}).catch((error)=>{
    console.log(error)
})

//Error middleware
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode //500
    const message = err.message // 'Internal server error
    return res.status(statusCode).json({
        success:false,
        message,statusCode
    })
})