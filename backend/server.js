import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary  from './config/cloudinary.js'
import adminRouter from './routes/adminroute.js'
const app=express()
const port=process.env.PORT||5000;
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())


//api endpoints
app.use('/api/admin',adminRouter)
//localhost:4000/api/admin
app.get("/",(req,res)=>{
    res.send("api work")
})

app.listen(port,()=> console.log("server strated",port));