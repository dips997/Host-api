const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  // console.log("Hello i m request query", req.query);

  const Products = await Product.find(req.query);
  res.status(200).json({ Products });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
