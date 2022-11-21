const productsService = require('../services/productsService');
const errorMap = require('../utils/errorMap');

const listProducts = async (_req, res) => {
  const { message } = await productsService.findAll();
  return res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const product = req.body;
  const { message } = await productsService.createProduct(product);
  res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const productData = { id, name };

  const { type, message } = await productsService.updateProduct(productData);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.removeProduct(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(204).end();
};

module.exports = {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  removeProduct,
};
