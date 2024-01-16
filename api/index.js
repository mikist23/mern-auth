import express from "express"
import mongoose  from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.listen(5000,()=> {
    console.log('Server running on port 5000')})

mongoose.connect(process.env.CONNECTION_STRING).then(()=> {
    console.log('Connected to the Database')
}).catch((error)=>{
    console.log(error)
})
