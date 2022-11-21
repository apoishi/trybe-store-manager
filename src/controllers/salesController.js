const salesService = require('../services/salesService');
const errorMap = require('../utils/errorMap');

const listSales = async (req, res) => {
  const { message } = await salesService.findAll();
  return res.status(200).json(message);
};

const getSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const removeSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.removeSale(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(204).end();
};

module.exports = {
  listSales,
  getSale,
  removeSale,
};
