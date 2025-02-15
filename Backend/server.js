require('dotenv').config()
const express=require('express')
const cors =  require('cors')
const bodyparser=require('body-parser')
const app = express()
const DB=require('./DB/connectDb')
const dataroute=require('./Routes/userRoute')

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use('/uploads',express.static('uploads'))
app.use(bodyparser.json())


app.use('/api/data',dataroute)
DB()
app.listen(8000,()=>{

    console.log('http.localhost:8000 running')

})
