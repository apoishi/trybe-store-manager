const productsModel = require('../models/productsModel');
const {
  validateNewProduct,
  validateProductToUpdate,
} = require('../validations/validationsInputValues');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const product = await productsModel.findById(productId);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const createProduct = async (productName) => {
  const error = await validateNewProduct(productName);
  if (error.type) return error;

  const newProductId = await productsModel.insert(productName);
  const newProduct = await productsModel.findById(newProductId);

  return { type: null, message: newProduct };
};

const updateProduct = async (dataToUpdate) => {
  const error = await validateProductToUpdate(dataToUpdate);
  if (error.type) return error;

  const result = await productsModel.findById(dataToUpdate.id);
  if (result) {
    await productsModel.updateById(dataToUpdate);
    return { type: null, message: dataToUpdate };
  }
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const removeProduct = async (productId) => {
  const product = await productsModel.findById(productId);
  if (product) {
    await productsModel.remove(productId);
    return { type: null };
  }
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProduct,
  removeProduct,
};
