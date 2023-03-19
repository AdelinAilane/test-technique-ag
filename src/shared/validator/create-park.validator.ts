import * as Joi from 'joi';

export const CreateParkSchema = Joi.object({
  categoryId: Joi.number(),
  name: Joi.string().allow('', null),
  description: Joi.string().allow('', null),
}).options({
  abortEarly: false,
});
