const Joi = require('joi');

const addProductsSchema = Joi.object({
  name:
    Joi.string().min(5).required(),
});

module.exports = {
  addProductsSchema,
};