import Joi from "joi";

export const createUserSchema = Joi.object({
  responseCode: Joi.number().valid(201).required(),
  message: Joi.string().valid("User created!").required(),
});

export default createUserSchema;
