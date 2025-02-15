const mongoose=require('mongoose')

const connectdatabase=async()=>{

   try{

    const con= await mongoose.connect('mongodb://localhost:27017/Olxsampledatabase')
    console.log(`'mongoDb connected':${con.connection.host}`)

   }catch(error){

    console.error(error.message)
    process.exit(1)
   }
}

module.exports=connectdatabase