const salesModels = require('../models/salesModels');

const findAll = async () => {
  const products = await salesModels.findAll();
  return { type: null, message: products };
};

const findById = async (saleId) => {
  const sale = await salesModels.findById(saleId);
  if (sale) return { type: null, message: sale };
  return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
};

module.exports = {
  findAll,
  findById,
};