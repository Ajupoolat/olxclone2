const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  productImage: {
    type: String,
    require: true,
  },
});

module.exports=mongoose.model("product",productSchema)