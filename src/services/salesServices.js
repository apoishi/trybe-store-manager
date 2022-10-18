const salesModels = require('../models/salesModels');

const findAll = async () => {
  const sales = await salesModels.findAll();
  return { type: null, message: sales };
};

const findById = async (saleId) => {
  const sale = await salesModels.findById(saleId);
  if (sale && sale.length > 0) return { type: null, message: sale };
  return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
};

module.exports = {
  findAll,
  findById,
};