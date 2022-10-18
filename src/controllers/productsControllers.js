const productsServices = require('../services/productsServices');
const errorMap = require('../utils/errorMap');

const listProducts = async (_req, res) => {
  const { message } = await productsServices.findAll();
  return res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const product = req.body;
  const { message } = await productsServices.createProduct(product);
  res.status(201).json(message);
};

module.exports = {
  listProducts,
  getProduct,
  createProduct,
};
