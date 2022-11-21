const salesModel = require('../models/salesModel');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { type: null, message: sales };
};

const findById = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (sale && sale.length > 0) return { type: null, message: sale };
  return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
};

const removeSale = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (sale && sale.length > 0) {
    await salesModel.remove(saleId);
    return { type: null };
  }
  return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
};

  module.exports = {
    findAll,
    findById,
    removeSale,
  };
