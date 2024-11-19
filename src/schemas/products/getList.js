import Joi from 'joi';

const productSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
  name: Joi.string().min(1).required(),
  price: Joi.string().pattern(/^Rs\.\s\d+$/).required(),
  brand: Joi.string().required(),
  category: Joi.object({
    usertype: Joi.object({
      usertype: Joi.string().required(),
    }).required(),
    category: Joi.string().required(),
  }).required(),
});

export const productsListSchema = Joi.object({
  responseCode: Joi.number().valid(200).required(),
  products: Joi.array().items(productSchema).min(1).required(),
});

export default productsListSchema;
