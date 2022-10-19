const { addProductsSchema } = require('./schema');
const { updateProductsSchema } = require('./schema');

const validateNewProduct = (productName) => {
  const { error } = addProductsSchema.validate(productName);
  if (error) return { type: 'MISSING_FIELD', message: error.message };
  return { type: null, message: '' };
};
const validateProductToUpdate = (dataToUpdate) => {
  const { error } = updateProductsSchema.validate(dataToUpdate);
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validateNewProduct,
  validateProductToUpdate,
};