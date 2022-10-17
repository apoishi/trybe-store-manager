const { addProductsSchema } = require('./schema');

const validateNewProduct = (productName) => {
  const { error } = addProductsSchema.validate(productName);
  if (error) return { type: 'MISSING_FIELD', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validateNewProduct,
};