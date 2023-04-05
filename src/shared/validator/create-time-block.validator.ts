import * as Joi from 'joi';

export const CreateTimeBlockSchema = Joi.object({
  parkId: Joi.number(),
  lowestPrice: Joi.number(),
  power: Joi.number(),
  startDate: Joi.date(),
  endDate: Joi.date(),
}).options({
  abortEarly: false,
});
