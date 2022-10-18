const salesServices = require('../services/salesServices');
const errorMap = require('../utils/errorMap');

const listSales = async (req, res) => {
  const { message } = await salesServices.findAll();
  return res.status(200).json(message);
};

const getSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesServices.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  listSales,
  getSale,
};