const express=require('express')
const {signup,login}=require('../Controller/userController')
const multer=require('multer')
const {productsaving,getallproducts,getProductById}=require('../Controller/ProductController')



const router=express.Router()

const storage = multer.diskStorage({

    destination:(req,file,cb)=>{

        cb(null , "uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
})

const upload = multer({storage})

//add product routes 
router.post("/addproduct", upload.single("image"),productsaving);
router.get("/products",getallproducts);
router.get("/products/:id",getProductById);
//login and signup routes
router.post('/signup',signup)
router.post('/login',login)

module.exports=router