const productsModels = require('../models/productsModels');

const findAll = async () => {
  // TODO: get products from model
  const products = await productsModels.findAll();
  // TODO: return the object
  return { type: null, message: products };
};

const findById = async (productId) => {
  const product = await productsModels.findById(productId);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
};