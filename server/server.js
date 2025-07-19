import express from 'express'
import dotenv  from 'dotenv'
import connectDB from './utils/db.js'
import userRoute  from "./routes/user.route.js"
import cookieParser  from 'cookie-parser'
import cors from 'cors'


dotenv.config()

const PORT = process.env.PORT || 2000



const app = express()

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
// create apis
app.use("/api/v1/user", userRoute)
app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false,
    })
})
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running at this port ${PORT}`)
})