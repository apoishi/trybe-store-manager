const productsModels = require('../models/productsModels');
const { validateNewProduct } = require('../validations/validationsInputValues');

const findAll = async () => {
  const products = await productsModels.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const product = await productsModels.findById(productId);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const createProduct = async (productName) => {
  const error = await validateNewProduct(productName);
  if (error.type) return error;

  const newProductId = await productsModels.insert(productName);
  const newProduct = await productsModels.findById(newProductId);

  return { type: null, message: newProduct };
};

module.exports = {
  findAll,
  findById,
  createProduct,
};
