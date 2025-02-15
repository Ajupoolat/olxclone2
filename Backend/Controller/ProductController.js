const productModel = require("../model/productModel");

//saving products in database
const productsaving = async (req, res) => {
  console.log("Request body:", req.body); // Log the request body
  console.log("Request file:", req.file); // Log the uploaded file
  const { productName, description, price,address} = req.body;

  try {
    const productImage = req.file ? req.file.path : "";

    const newProduct = new productModel({
      productName,
      description,
      price,
      address,
      productImage,
    });
    await newProduct.save();
    
    res.status(201).json({ message: "Product added successfully", newProduct });
  } catch (error) {
    res.status(500).json({ error: "Error adding product" });
  }
};

//get porducts

const getallproducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error in data fetching" });
  }
};

//get product by id for the see the porducts for users

const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error fetching product details" });
  }
};

module.exports = { productsaving, getallproducts, getProductById };
