const Joi = require('joi');

const addProductsSchema = Joi.object({
  name:
    Joi.string().min(5).required(),
});

const updateProductsSchema = Joi.object({
  id:
    Joi.number().integer().min(1).required(),
  name:
    Joi.string().min(5).required(),
});

module.exports = {
  addProductsSchema,
  updateProductsSchema,
};