import Joi from 'joi';

export const deleteRandomAccountSchema = Joi.object({
  responseCode: Joi.number().valid(200).required(),
  message: Joi.string().valid('Account deleted!').required(),
});

export default deleteRandomAccountSchema;
